const {
  readFile,
  writeFile,
  appendFile,
  copyFile,
  watchFile,
  readFileSync,
} = require("fs");
const { resolve } = require("path");

filepath = resolve("./test.txt");
// readFile，指定文件中读取数据

readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// writeFile，向指定文件中写入数据

// 如果filepath不存在，则会执行创建操作
writeFile(filepath, "hello", {}, (err) => {
  if (err) {
    console.log(err);
  }
  const data = readFileSync(filepath, "utf-8");
  console.log(data);
});

// appendFile，追加的方式向指定文件中写入数据

appendFile(filepath, "test", (err) => {
  if (err) {
    console.log(err);
  }
});

// copyFile, 将某个文件中的数据拷贝至另一个文件

copyFile(filepath, "./test1.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

// 一次性操作，文件内容放在内存，然后在进行操作

// watchFile, 对指定文件进行监控

watchFile(filepath, { interval: 20 }, (cur, prev) => {
  if (cur.mtime !== prev.mtime) {
    console.log("文件修改了");
  }
});
