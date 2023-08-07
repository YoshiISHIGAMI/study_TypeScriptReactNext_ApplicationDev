// 名前とフォーマット関数を引数として受け取りフォーマットを実行してコンソール出力を行う関数を定義します
function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}

// sanを末尾につける名前のフォーマット関数を定義します
function formatName(name: string): string {
  return `${name} san`
}

printName('Takuya', formatName) // Takuya san