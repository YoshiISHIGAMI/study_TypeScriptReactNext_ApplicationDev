// util.jsというファイルの定義
export const sum = (x, y) => x + y

// util.jsを読み込むmain.js
import { sum } from './util.js'
console.log(sum(5, 2)) // 7