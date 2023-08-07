// 変数や引数の宣言時にUnion型を指定して、numberもしくはstringを受け付けることができます
function printId(id: number | string) {
  console.log(id)
}
// numberでも正常に動作します
printId(11)
// stringでも正常に動作します
printId('22')