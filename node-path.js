const {
  basename,
  dirname,
  extname,
  isAbsolute,
  join,
  resolve,
  parse,
  format,
  normalize,
} = require("path");

console.log(__filename);

/**
 * basename 获取路径的基础名称 - 返回文件路径的最后一个部分
 * 第二个参数表示当前的扩展名，没有设置返回完整的文件名，如果匹配到扩展名，则返回文件名
 * 处理路径目录时，忽略结尾路径分隔符
*/

// console.log(basename(__filename));
// console.log(basename(__filename, '.js'));

// dirname 获取路径的目录名称

console.log(dirname(__filename))

// extname 获取文件的扩展名

// console.log(extname(__filename))

// isAbsolute 路径是否为绝对路径

// join 拼接多个路径片段

// resolve 返回绝对路径

// parse 解析路径

// format 序列化路径

// normalize 规范化路径
