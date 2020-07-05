const http = require("http");

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("My First Server !");
  response.end();
})


server.listen(port, () => {
  console.log(`Server running at port ${port}`);
})