// userがnullの場合、実行時エラーになる可能性があるプロパティへのアクセスはコンパイルエラー
// !を用いて明示的に指定することでコンパイルエラーを抑制
function processUser(user?: User) {
  let s = user!.name
}