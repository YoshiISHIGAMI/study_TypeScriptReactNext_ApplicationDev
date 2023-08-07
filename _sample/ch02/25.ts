// window.confirm関数の返り型はbooelanを返すことをTypeScriptは知っているため
// 代入する関数の型が一致しない場合コンパイル時エラーになります
window.confirm = () => {
  // booleanをreturnしない限りエラーになります
  console.log('confirm関数')
}