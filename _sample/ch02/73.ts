// nullを明示的に許容するように型を定義します
let date: Date | null
date = new Date()
// コンパイルエラーは起きません
date = null