type User = {
  name: string;
  gender: string;
}

type UserReadonly = Readonly<User>

let user: User = { name: 'Takuya', gender: 'Male' }
let userReadonly: UserReadonly = { name: 'Takuya', gender: 'Male' }

user.name = 'Yoshiki' // OK
userReadonly.name = 'Yoshiki' // コンパイル時エラーが発生します