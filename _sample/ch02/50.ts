// 先述のIdentityとContactを定義
// 積集合による新たなIntersection型の定義をします
// IdentityとContactの両方のすべてのプロパティがマージされた型として扱います
type Employee = Identity & Contact

// OK
const employee: Employee = {
  id: '111',
  name: 'Takuya',
  email: 'test@example.com',
  phone: '012345678'
}

// エラー: Contact情報のみでの変数定義はできません。idが必要です
const employeeContact: Employee = {
  name: 'Takuya',
  email: 'test@example.com',
  phone: '012345678'
}