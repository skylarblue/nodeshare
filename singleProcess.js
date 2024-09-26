const http = require("http");

function sleepTime(time) {
  const sleep = Date.now() + time * 1000;
  while (Date.now() < sleep) {}
}

const server = http.createServer((req, res) => {
  res.end("res data");
});

sleepTime(4);

server.listen(3000, () => {
  console.log("server start on port 3000");
});
