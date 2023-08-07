function sayHello(name: string, greeting: string = 'Hello'): string {
  return `${greeting} ${name}`
}

// 以下はどちらも問題なく動作します
sayHello('Takuya') // Hello Takuya
sayHello('Takuya', 'Hey')　// Hey Takuya