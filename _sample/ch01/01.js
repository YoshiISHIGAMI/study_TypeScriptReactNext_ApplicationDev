// util.jsというファイルの定義
module.exports.sum = (x, y) => x + y

// util.jsを読み込むmain.js
const { sum } = require('./util.js')
console.log(sum(5, 2)) // 7