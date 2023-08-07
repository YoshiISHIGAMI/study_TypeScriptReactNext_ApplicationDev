function printName(obj: { firstName: string; lastName?: string }) {
  // ...
}
// 以下のどちらのパターンでも正常に動作します
printName({ firstName: 'Takuya' })
printName({ firstName: 'Takuya', lastName: 'Tejima' })