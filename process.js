// 1 资源: cpu 内存
// console.log(process.memoryUsage());
// console.log(process.cpuUsage())

// const { sleepTime } = require("./singleProcess")

// 运行环境、运行目录、node环境、cpu架构、用户环境、系统平台

// 当前工作目录
console.log(process.cwd())

// nodejs 版本
console.log(process.version)

// nodejs 版本、 v8版本、 libuv版本
console.log(process.versions)

// 操作系统架构
console.log(process.arch)

// 环境变量
console.log(process.env)

// 系统环境变量
// console.log(process.env.Path)

// 获取管理员目录
// console.log(process.env.USERPROFILE);

// 获取系统平台 win32 win操作系统
// console.log(process.platform)

// 运行状态、启动参数、pid、工作结束后统计运行时间
// console.log(process.argv)

// console.log(process.argv0)

// console.log(process.pid)

// sleepTime(4)

// console.log(process.uptime())

// process.on("exit", (code) => {
//   console.log("process exit", code);

//   // 里面只能执行同步代码
//   setTimeout(() => {
//     console.log(123)
//   }, 100);
// });

// process.on('beforeExit', (code) => {
//   console.log('before process exit', code)
// })


// console.log('代码执行完了')