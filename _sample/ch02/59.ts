interface User {
  name: string;
  age: number;
  email: string;
}
type UserKey = keyof User // 'name' | 'age' | 'email' というUnion型になる

const key1: UserKey = 'name' // 代入可能です
const key2: UserKey = 'phone' // コンパイル時エラーが起こります

// 第1引数に渡したオブジェクトの型のプロパティ名のUnion型と、第2引数で渡す値の型が一致しない場合型エラーになります
// T[K]によりキーに対応する型が戻り値の型となります（たとえば上記Userのageをkeyに渡した場合、戻り値の方はnumberになります）
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user: User = {
  name: 'Takuya',
  age: 36,
  email: 'test@example.com'
}

// nameは型のキーに存在するため正しくstring型の値が返ります
const userName = getProperty(user, 'name')

// genderはオブジェクトのキーに存在しないため、コンパイル時エラーになります
const userGender = getProperty(user, 'gender')