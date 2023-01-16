'use strict';

const log4js = require("log4js");
log4js.configure({
  appenders: {
    out: { type: "stdout" },
    app: { type: "file", filename:  '../logs/file.log' },
  },
  categories: {
    default: { appenders: ["out", "app"], level: "debug" },
  },
});
module.exports = log4js;