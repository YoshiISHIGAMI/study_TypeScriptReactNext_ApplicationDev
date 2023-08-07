// anyと同様にどんな値でもunknownとして代入することができます
const x: unknown = 123
const y: unknown = 'Hello'

// 関数やプロパティにアクセスした際に、unknown型そのままではコンパイル時にエラーが発生します
// error TS2339: Property 'toFixed' does not exist on type 'unknown'.
console.log(x.toFixed(1))
// error TS2339: Property 'toLowerCase' does not exist on type 'unknown'.
console.log(y.toLowerCase())

// 型安全な状況下で関数やプロパティにアクセスして実行できます
if (typeof x === 'number') {
  console.log(x.toFixed(1)) // 123.0
}

if (typeof y === 'string') {
  console.log(y.toLowerCase()) // hello
}