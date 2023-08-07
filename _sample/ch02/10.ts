let mynumber: string = '200'
mynumber = '二百' // string型なので問題なく代入できる
mynumber = 200 // string型の変数にnumber型を入れようとしてコンパイルエラーが起きる。 Type 'number' is not assignable to type 'string'.