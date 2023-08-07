class Point3D extends Point {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    // 継承元のコンストラクタを呼び出す
    super(x, y)
    this.z = z
  }

  moveZ(n: number): void {
    this.z += n
  }
}

const point3D = new Point3D()
// 継承元のメソッドを呼び出すことができます
point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`) // 10, 0, 20