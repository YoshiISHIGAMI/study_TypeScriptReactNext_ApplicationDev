let date: Date
date = new Date()
// strictNullChecksを有効化にしている場合、nullを代入しようとする際にコンパイルエラーが発生します
// error TS2322: Type 'null' is not assignable to type 'Date'.
date = null