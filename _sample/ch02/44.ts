enum Direction {
  Up,
  Down,
  Left,
  Right
}

// enum Directionを参照
let direction: Direction = Direction.Left
// 2という数字が出力されます
console.log(direction)

// enumを代入した変数に別の型の値を代入しようとするとエラーになります
direction = 'Left' // stringを入れようとするとエラー