interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// 複数のインタフェースを継承して新たなインタフェースを定義できます
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: '赤',
  radius: 10
}