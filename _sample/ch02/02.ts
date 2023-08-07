// firstNameの後ろにstringの型をつけることで、文字列以外の値を渡せないようにします
function sayHello (firstName: string) {
  console.log('Hello ' + firstName)
}

let firstName: string = 'Takuya'
sayHello(firstName)