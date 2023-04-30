import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

// DecrementButton は通常の関数componentでボタンを表示
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log('DecrementButton が再描画されました')
  return <button onClick={onClick}>Decrement</button>
}

// IncrementButton はメモ化した関数componentでボタンを表示
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('IncrementButton が再描画されました')
  return <button onClick={onClick}>Increment</button>
})

// DoubleButton はメモ化した関数componentでボタンを表示
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('DoubleButton が再描画されました')
  return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const [count, setCount] = useState(0)
  const decrement = () => {
    setCount((c) => c - 1)
  }
  const increment = () => {
    setCount((c) => c + 1)
  }
  // useCallback を使って関数をメモ化する
  const double = useCallback(() => {
    setCount((c) => c * 2)
    // 第2引数はから配列なので、useCallback は常に同じ値を返す
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {/* componentに関数を渡す */}
      <DecrementButton onClick={decrement} />
      {/* メモ化componentに関数を渡す */}
      <IncrementButton onClick={increment} />
      {/* メモ化componentにメモ化した関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  )
}
export default Parent
