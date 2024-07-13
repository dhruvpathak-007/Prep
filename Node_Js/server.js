const http = require("http");

const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(3000, () => {
  console.log("server is listening...");
});
