function sayHello(name: string, greeting?: string): string {
  return `${greeting} ${name}`
}

// 以下はどちらも問題なく動作します
sayHello('Takuya') // Takuya
sayHello('Takuya', 'Hello') // Hello Takuya