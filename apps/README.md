<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/public/logo-dark.svg?raw=true" width="400">
    <source media="(prefers-color-scheme: light)" srcset="../assets/public/logo.svg?raw=true" width="400">
    <img alt='mion, a mikro kit for Typescript Serverless APIs' src='../assets/public/logo.svg?raw=true' width="400">
  </picture>
</p>
<p align="center">
  <strong>mion and deepkit typescript apps.
  </strong>
</p>
<p align=center>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
  <img src="https://img.shields.io/badge/license-MIT-97ca00.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
</p>

# Typescript apps

These are the [deepkit](https://deepkit.io/) and [mion](https://github.com/MionKit/mion) server apps required for the benchmarks. Both deepkit and mion requires compilation directly from typescript as they generate the runtime type information from typescript types.

### Compiling the apps

```shell
# from the root of the repo
npm run build
```

The typescript apps get compiled into `/_compiled-apps` directory and used for the benchmarks.

Compiled code is committed to the repo for better visibility and so the benchmarks work without any pre-compilation step.

If any changes are required just update the ts apps, compile and commit the generated code.

## &nbsp;

_[MIT](../../LICENSE) LICENSE_
