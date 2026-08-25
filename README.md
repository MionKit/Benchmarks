<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/public/logo-dark.svg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="./assets/public/logo.svg?raw=true">
    <img alt='mion, a mikro kit for Typescript Serverless APIs' src='./assets/public/logo.svg?raw=true' width="403" height="150">
  </picture>
</p>

<p align="center">
  <strong>Archived. The mion server benchmarks now live in the main mion repo.</strong><br/>
</p>

# mion HTTP Benchmarks (archived)

This repository is **archived and read-only**. It is kept for history only, and the
numbers in it are outdated.

The mion HTTP server benchmarks were folded into the main repo, where they run in
their own container image and are published straight to the docs site:

- **Source:** [MionKit/mion → `container/mion-bench/`](https://github.com/MionKit/mion/tree/main/container/mion-bench)
- **Published results:** [mion.pages.dev/benchmarks/hello-world](https://mion.pages.dev/benchmarks/hello-world)

## Why it moved

Living in the main repo means the benchmarks are built from the current mion source
on every run, so the published numbers always describe the code that is actually
released. Each framework under test gets its own isolated dependency tree, and every
lane has to answer correctly and reject an invalid payload before it is measured.

## Running them

```sh
git clone https://github.com/MionKit/mion.git
cd mion
pnpm rtx bench servers
```

See [`container/mion-bench/README.md`](https://github.com/MionKit/mion/blob/main/container/mion-bench/README.md)
for the full set of commands.
