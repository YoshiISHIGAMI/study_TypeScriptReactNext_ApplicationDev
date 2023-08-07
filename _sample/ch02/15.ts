let user: any = { firstName: 'Takuya' }
// 以下の行のコードはいずれもコンパイラエラーが起こりません
user.hello()
user()
user.age = 100
user = 'hello'

// 他の型への代入を行ってもエラーが起きません
const n: number = user