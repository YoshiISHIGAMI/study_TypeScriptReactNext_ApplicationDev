type User = {
  readonly name: string;
  readonly gender: string;
}

let user: User = { name: 'Takuya', gender: 'Male' }

// 以下の代入を行った際にコンパイル時エラーが発生します
user.gender = 'Female'