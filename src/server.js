const http = require('http');

const server = (port = 8000, handler) => {
  const server = http.createServer(handler);

  server.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

module.exports = { server };
