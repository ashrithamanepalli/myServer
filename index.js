const { createAsyncRouter } = require('./src/asyncRouter');
const { createRouter } = require('./src/router');
const { server } = require('./src/server');
const { errorHandler } = require('./src/handlers/errorHandler.js');
const { createFileContentServer } = require('./src/handlers/serveFileContent.js');
const { logRequest } = require('./src/handlers/logRequest.js');
const { parseBodyParams } = require('./src/handlers/parseBodyParams.js');
const { parseSearchParams } = require('./src/handlers/parseSearchParams.js');

const startServer = (port, handler) => {
  server(port, handler);
};

module.exports = {
  createAsyncRouter, createRouter, startServer, logRequest, parseBodyParams,
  parseSearchParams, errorHandler, createFileContentServer
};
