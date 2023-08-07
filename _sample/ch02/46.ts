// Tはクラス内で利用する仮の型の名前です
class Queue<T> {
  // 内部にTの型の配列を初期化します
  private array: T[] = []

  // Tの型の値を配列に追加します
  push(item: T) {
    this.array.push(item)
  }

  // Tの型の配列最初の値を取り出します
  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>() // 数値型を扱うキュー生成します
queue.push(111)
queue.push(112)
queue.push('hoge') // number型ではないのでコンパイル時エラーになります

let str = 'fuga'
str = queue.pop() // strはnumber型ではないのでコンパイル時エラーになります