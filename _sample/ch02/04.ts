// number型を引数として渡した場合、コンパイル時に以下のエラーが発生します。この機能はJavaScriptにないものです。
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
let age: number = 36
sayHello(age)