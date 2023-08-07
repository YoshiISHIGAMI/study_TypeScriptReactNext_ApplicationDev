// nullになり得るsocialというプロパティの型を定義します
interface User {
  name: string
  social?: {
    facebook: boolean
    twitter: boolean
  }
}

let user: User

user = { name: 'Takuya', social: { facebook: true, twitter: true } }
// trueが出力されます
console.log(user.social?.facebook)

user = { name: 'Takuya' }
// socialが存在しないケースでも以下のコードは実行時エラーになりません
console.log(user.social?.facebook) 