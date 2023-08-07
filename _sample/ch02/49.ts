type Identity = {
  id: number | string;
  name: string;
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

// 和集合による新たなUnion型の定義をします
// IdentityもしくはContactの型を受けることが可能です
type IdentityOrContact = Identity | Contact

// OK
const id: IdentityOrContact = {
  id: '111',
  name: 'Takuya' 
}

// OK
const contact: IdentityOrContact = {
  name: 'Takuya' ,
  email: 'test@example.com',
  phone: '012345678'
}