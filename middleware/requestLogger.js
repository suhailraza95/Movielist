const morgan = require("morgan");

morgan.token("request-id", (req) => req.requestId);

const requestLogger = morgan(
  ":method :url :status :response-time ms requestId=:request-id"
);

module.exports = requestLogger;