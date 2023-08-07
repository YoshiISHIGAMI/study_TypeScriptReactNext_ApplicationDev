function calc(isSum: boolean) {
  let a = 100
  if (isSum) {
    // aが定義された内側のブロックスコープ内の利用なのでエラーは起きません
    let b = a + 1
    return b
  }
  // error TS2304: Cannot find name 'b'.
  // varで定義した場合はエラーになりませんが、letで定義した際にはエラーになります
  return b
}