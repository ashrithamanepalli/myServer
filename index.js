const { createAsyncRouter } = require('./src/asyncRouter');
const { createRouter } = require('./src/router');
const { server } = require('./src/server');

const startServer = (port, handler) => {
  server(port, handler);
};

module.exports = { createAsyncRouter, createRouter, startServer };
