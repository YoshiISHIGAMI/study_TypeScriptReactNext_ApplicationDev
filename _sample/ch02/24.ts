const names = ['Takuya', 'Yoshiki', 'Taketo']

names.forEach((name) => {
  // string型として扱われるので、関数名を間違えている呼び出しはコンパイル時エラーになります
  // 本来は toUpperCase が正しいです
  console.log(name.toUppercase())
})