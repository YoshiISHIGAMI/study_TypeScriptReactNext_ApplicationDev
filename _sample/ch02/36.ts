interface Point {
  x: number;
  y: number;
  z: number;
}

// クラスがインタフェースをimplementsした際に、zが存在しないためコンパイル時エラーになります
class MyPoint implements Point {
  x: number;
  y: number;
}