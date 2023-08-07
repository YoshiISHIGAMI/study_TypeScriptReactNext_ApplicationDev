class Point {
  x: number;
  y: number;

  // 引数がない場合の初期値を指定します
  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  // 戻り値がない関数を定義するためにvoidを指定します
  moveX(n: number): void {
    this.x += n
  }

  moveY(n: number): void {
    this.y += n
  }
}

const point = new Point()
point.moveX(10)
console.log(`${point.x}, ${point.y}`) // 10, 0