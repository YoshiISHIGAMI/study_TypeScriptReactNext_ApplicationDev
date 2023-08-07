// 頭のIはインタフェースであることを示すためのもの
interface IUser {
  name: string;
  age: number;
  sayHello: () => string; // 引数なしで文字列を返す
}

class User implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = ''
    this.age = 0
  }

  // インタフェースに定義されているメソッドを実装しない場合、コンパイル時エラーになります
  sayHello(): string {
    return `こんにちは、私は${this.name}、${this.age}歳です。`
  }
}

const user = new User()
user.name = 'Takuya'
user.age = 36
console.log(user.sayHello()) // 'こんにちは、私はTakuya、36歳です。'