import React, { useState, useMemo } from 'react'

const square = (parameter) => {
  console.log('square関数の実行観察')
  //正方形の面積を求める関数を定義する
  //パフォーマンスを観察したいので、わざと重い処理を置いてみる
  let i = 0
  while (i < 20000000) i++
  return parameter * parameter
}

const UseMemoSample1 = () => {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  // 1ずつカウントが増える足し算A
  const resultA = () => {
    return setCountA(countA + 1)
  }

  // 1ずつカウントが増える足し算B
  const resultB = () => {
    return setCountB(countB + 1)
  }

  //正方形の面積をcountBを使った計算結果
  //useMemoを使って、計算結果をメモ化している
  //第２引数である依存配列にcountBを渡しているので、countAを更新しても、countBが更新されなければメモ化された描画結果を再利用するためsquare関数は更新されない
  const squareArea = useMemo(() => square(countB), [countB])

  return (
    <>
      <p>
        計算結果A: {countA}　<button onClick={resultA}>計算A + 1</button>
      </p>
      <p>【正方形の面積】</p>
      <p>
        計算結果B: {countB}　<button onClick={resultB}>計算B + 1</button>
      </p>
      <p>計算結果B ✕ 計算結果B = {squareArea}</p>
    </>
  )
}
export default UseMemoSample1
