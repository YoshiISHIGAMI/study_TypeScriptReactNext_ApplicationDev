// オプショナルプロパティでinfoを定義します
type User = {
  info?: {
    name: string;
    age: number;
  }
}

let response = {}
// responseはJSON形式のAPIレスポンスが代入されている想定。Userに型アサーションします
const user = (response as any) as User

// オプショナルのプロパティへの型ガードを行う
if (user.info) {
  // オプショナルプロパティ配下のプロパティであるuser.info.nameにアクセスしてもエラーが起きません
  // もしifの条件がない場合は Object is possibly 'undefined'. というエラーが発生します
  console.log(user.info.name)
}