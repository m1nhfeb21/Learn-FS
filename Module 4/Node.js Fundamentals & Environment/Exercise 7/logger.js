require("dotenv").config();

const levels = {
  info: 0,
  warn: 1,
  error: 2,
};

const logLevel = (process.env.LOG_LEVEL || "info").toLowerCase();
const minLevel = levels[logLevel] ?? levels.info;

let initCount = 0;
initCount++;

function printLog(level, msg) {
  if (levels[level] >= minLevel) {
    console.log(`[${level.toUpperCase()}] ${msg}`);
  }
}

function info(msg) {
  printLog("info", msg);
}

function warn(msg) {
  printLog("warn", msg);
}

function error(msg) {
  printLog("error", msg);
}

module.exports = {
  info,
  warn,
  error,
  initCount,
};
