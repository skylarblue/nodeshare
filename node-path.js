const {
  basename,
  dirname,
  extname,
  isAbsolute,
  join,
  resolve,
  parse,
  format,
} = require("path");

// console.log(__filename);

/**
 * basename 获取路径的基础名称 - 返回文件路径的最后一个部分
 * 第二个参数表示当前的扩展名，没有设置返回完整的文件名，如果匹配到扩展名，则返回文件名
 * 处理路径目录时，忽略结尾路径分隔符
 */

// console.log(basename(__filename));
// console.log(basename(__filename, '.js'));

/**
 * dirname 获取路径的目录名称
 * 返回路径目录名，路径最后部分的上一层目录
 * */

// console.log(dirname(__filename))

/**
 * extname 获取文件的扩展名
 * 匹配最后一个点的位置，返回后面的内容
 * */

// console.log(extname(__filename));

// isAbsolute 路径是否为绝对路径

// console.log(isAbsolute(__filename))

// join 拼接多个路径片段

// console.log(join('/a/b/', 'c', './', './process.js'))
// console.log(join('/a/b/', 'c', '', './process.js'))


/**
 * resolve 返回绝对路径
 * 接受两部分参数，[from] to
 * 将to部分拼接后，判断是否为绝对路径，非绝对路径是拼接到盘符后面
 * */ 

// console.log(resolve('/a/b/', 'c', '', './process.js'))
console.log(resolve('index.html'))
// console.log(process.cwd())

/**
 * parse 解析路径
 * 返回路径信息对象
 * root: 根目录
 * dir: 最后一段路径之前的内容
 * base: 最后一段路径
 * ext: 扩展名
 * name: 文件名
 * */

// const obj = parse(__filename);
// console.log(obj);

// format 序列化路径

// console.log(format(obj));
