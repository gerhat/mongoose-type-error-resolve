# Mongoose: issue #9505 reproduction repo
This repository is created for demonstrating the `TypeError: resolve is not a function` issue mongoose has in v5.10.10 / v5.10.11 as described in this issue: https://github.com/Automattic/mongoose/issues/9505

# How to reproduce
1. execute the following
```shell
npm install && node index.js
```
2. wait 8-10 seconds
3. see the following error in the console: `(node:88963) UnhandledPromiseRejectionWarning: TypeError: resolve is not a function`

# License
MIT