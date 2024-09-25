const http = require("http");

function sleepTime(time) {
  const sleep = Date.now() + time * 1000;
  while (Date.now() < sleep) {}
}

// const server = http.createServer((req, res) => {
//   res.end("1111");
// });

// sleepTime(4);

// server.listen(3000, () => {
//   console.log("服务启动了");
// });

module.exports = { sleepTime };
