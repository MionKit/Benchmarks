# Parameters in the url and performance

This is an experiment to validate the assumption that using parameters in the url might hurt performance!

When using REST style url or parameter in the url i.e: `/updateUser/:userId` the router needs to parse the url, depending on the router implementation this can be more or less efficient. But will always be less performant the a plain string that doesn't need to be parsed?

Sometimes this params in the url are redundant because those params are typically sent in the body anyway (like when an entity gets updated). Url params could be useful if using them avoid parsing the json body.

**!!These experiments were executed only once!! The code for the test can be found below, but it has been removed so it does not alter the regular benchmarks.**

## Update user

On this scenario passing the parameters in the url is uselles as the user id could be passed in the json body which has to be parsed anyway. But typically REST apis uses this as part of routing.

```js
fastify.post("/updateUser/:userId", updateUserOpts, function (req, reply) {
  const rawUser = req.body["user"];
  const user = deserializeUser(rawUser);
  // note the user id on the url could be redundant as it could be passed in json body anyway
  const userId = req.params.userId || user.id;
  reply.send({
    user: {
      ...user,
      name: "lorem",
      surname: "ipsum",
      lastUpdate: new Date().toJSON(),
    },
  });
});
```

In this scenario we can see how performance using url params is worst as we need to parse the url and json body as well.

|                       | Version | Req (R/s) | Latency (ms) | Output (Mb/s) | Description                                                                                              |
| :-------------------- | ------: | :-------: | -----------: | ------------: | :------------------------------------------------------------------------------------------------------- |
| fastify-no-url-params |  4.19.2 |  16927.4  |        58.55 |          4.36 | passing the all the information in the json body                                                         |
| fastify-url-params    |  4.19.2 |  11414.8  |        87.04 |          2.99 | typical REST url where params are send in the url even if redundant data is also passed in the json body |

## Find user by id

This is an scenario that doesn't requires sending any data to the server besides the userId.
Please note that having the userid in the URl might have some advantages in terms of caching, but this could be mitigated appending some king of request id to the url i.e: `/findUser?id=#1233JH89KLD`

```js
// using url params
fastify.post("/findUser/:userId", findUserOptsUrlParams, function (req, reply) {
  const userId = req.params.userId;
  reply.send({
    user: {
      id: userId,
      name: "lorem",
      surname: "ipsum",
      lastUpdate: new Date().toJSON(),
    },
  });
});
```

```js
// using json body to send the id
fastify.post("/findUser", findUserOpts, function (req, reply) {
  const user = req.body["user"];
  reply.send({
    user: {
      id: user.id,
      name: "lorem",
      surname: "ipsum",
      lastUpdate: new Date().toJSON(),
    },
  });
});
```

In this scenario we can see how performance using url params is better as we don't need to parse the body.

|                     | Version | Req (R/s) | Latency (ms) | Output (Mb/s) | Description                                     |
| :------------------ | ------: | :-------: | -----------: | ------------: | :---------------------------------------------- |
| fastify-findId-json |  4.19.2 |  15936.9  |        62.21 |          4.00 | sending user id in json body `{user: {id:123}}` |
| fastify-findId-url  |  4.19.2 |  21533.7  |        45.91 |          6.94 | sending user id in the url `findUser/123`       |

## How using url params affect all routes, not only the ones that uses them?

Bellow is an example of the performance of the same find user by id sending the param in the body when another route that uses url params is defined vs when there are no routes with url params. **Looks like there is not significant difference.**

|                     | Version | Req (R/s) | Latency (ms) | Output (Mb/s) | Description                                                          |
| :------------------ | ------: | :-------: | -----------: | ------------: | :------------------------------------------------------------------- |
| fastify-findId-json |  4.19.2 |  15936.9  |        62.21 |          4.00 | performance when there are NO other routes defined using url params. |
| fastify-findId-jso  |  4.19.2 |  16814.8  |        58.94 |          4.22 | performance when there are other routes defined using url params.    |

## Conclusions

Seems that the assumption that using url params affects performance is partially wrong. Using url params is faster when there is no need to parse the json body. So any get request that can send the params in the url.
This conclusion are valid only fastify library and might vary for other libraries, but fastify is the reference in performance and the one we are interested.
