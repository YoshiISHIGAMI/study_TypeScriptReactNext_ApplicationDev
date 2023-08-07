function getUser() {
  return {
     name: 'Takuya',
     age: 36
  }
}
const user = getUser()
console.log(user.age.length) // エラー: ageはnumber型なのでlengthプロパティはありません