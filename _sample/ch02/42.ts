class BasePoint3D {
  public x: number;
  private y: number;
  protected z: number;
}

// インスタンス化を行った場合のアクセス制御の例です
const basePoint = new BasePoint3D()
basePoint.x // OK
basePoint.y // コンパイル時エラーが起きます。privateであるためアクセスできません
basePoint.z // コンパイル時エラーが起きます。protectedもアクセスできません

// クラスを継承した際のアクセス制御
class ChildPoint extends BasePoint3D {
  constructor() {
    super()
    this.x // OK
    this.y // コンパイル時エラーが起きます。privateであるためアクセスできません
    this.z // protectedは問題なくアクセスできます
  }
}