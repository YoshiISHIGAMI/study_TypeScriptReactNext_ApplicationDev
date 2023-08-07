interface Point {
  x: number;
  y: number;
  z?: number;
}

// エラーは発生しません
class MyPoint implements Point {
  x: number;
  y: number;
}