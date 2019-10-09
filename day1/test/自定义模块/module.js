const module2 = require('./module2.js')
// 导入module2.js
const fn = require('./fn.js')
// 导入fn.js
console.log(1)
module2()
console.log(fn.plus(1,2))
// 打印出   1    2    (1+2=)3
console.log(fn.bool)