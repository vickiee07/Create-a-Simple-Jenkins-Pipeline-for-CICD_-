const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello from my app!");
});
server.listen(8080);
console.log("Server is running on port 8080");
module.exports = server;