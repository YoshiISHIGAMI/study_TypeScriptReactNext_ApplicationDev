enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// たとえばAPIのパラメータとして文字列が渡されたケースを想定します
const value = 'DOWN'
// 文字列からEnum型に変換します
const enumValue = value as Direction

if (enumValue === Direction.Down) {
  console.log('Down is selected')
}