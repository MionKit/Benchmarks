const core = require("@mionkit/core");
const path = require("path");

// Get the actual path to the router module
const routerPath = require.resolve("@mionkit/router");
const routerDir = path.dirname(routerPath);
console.log("Router dir:", routerDir);

// Load client.routes from the correct path
const clientRoutesPath = path.join(routerDir, "src/routes/client.routes.js");
console.log("Client routes path:", clientRoutesPath);

const clientRoutes = require(clientRoutesPath);
console.log("\n=== Checking client.routes type metadata ===");
console.log(
  "mionGetRemoteMethodsDataById exists:",
  !!clientRoutes.mionGetRemoteMethodsDataById,
);
console.log(
  "mionGetRemoteMethodsDataById.__type:",
  clientRoutes.mionGetRemoteMethodsDataById?.__type,
);

// Check if the lazy reference resolves correctly
if (clientRoutes.mionGetRemoteMethodsDataById?.__type) {
  const typeArr = clientRoutes.mionGetRemoteMethodsDataById.__type;
  console.log("\nResolving lazy references:");
  typeArr.forEach((el, i) => {
    if (typeof el === "function") {
      try {
        const resolved = el();
        console.log(`  [${i}]: function -> `, resolved);
      } catch (e) {
        console.log(`  [${i}]: function -> ERROR:`, e.message);
      }
    } else {
      console.log(`  [${i}]:`, el);
    }
  });
}
