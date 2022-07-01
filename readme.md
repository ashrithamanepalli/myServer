## SERVER MODULE

Require startServer from the server module.

### SYNTAX :

`
startServer(portNumber, handler);
`

- **Args** : Port number(by default => 8000), handler

- **Handler** : A handler(function) that works based on client request and responds.
              **Contract of handler** : (request, response)

### Routers :

**Routers** : Can be used when multiple handlers are to be passed to server.

*Module provides createRouter(synchronous) and createAsyncRouter.*

`
createRouter([handlers]);
`

- **createRouter(sync)** : Takes in an array of handlers.
                  *Contract* : every handler takes in request and response.

`
createAsyncRouter([handlers]);
`

- **createAsyncRouter** : Takes in an array of handlers.
                  *Contract* : every handler takes in request, response and next.
                     -> next is a function used in handler that informs router
                      to delegate the request to next handler.
