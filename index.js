const { createAsyncRouter } = require('./src/asyncRouter');
const { createRouter } = require('./src/router');
const { server } = require('./src/server');
const { errorHandler } = require('./src/handlers/errorHandler.js');
const { createFileContentServer } = require('./src/handlers/serveFileContent.js');

const startServer = (port, handler) => {
  server(port, handler);
};

module.exports = { createAsyncRouter, createRouter, startServer, errorHandler, createFileContentServer };
