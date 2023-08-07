const hoge: any = 'test'
const fuga: number = hoge as number
// コンパイル時にはnumber型として扱ってエラーが起きないですが、実行時に実際はstring型が渡されるため以下のエラーが起きます
// TypeError: fuga.toFixed is not a function
console.log(fuga.toFixed(2))