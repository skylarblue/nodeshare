const Eventemitter = require("events");

const myEvent = new Eventemitter();

myEvent.on("事件1", () => {
  console.log("事件1 触发了");
});

myEvent.on("事件1", () => {
  console.log("事件1 -2 触发了");
});

myEvent.emit('事件1')