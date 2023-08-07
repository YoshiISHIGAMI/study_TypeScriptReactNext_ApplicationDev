import { useState, useEffect } from 'react'

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000

// localstorage で使用するキー
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, seLocale] = useState(Locale.US)

  // タイマーをセットするための副作用
  useEffect(() => {
    // タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // クリーンアップ関数を渡し、アマウント時にタイマーの解除をする
    return () => {
      clearInterval(timer)
    }
    // 初期描画時のみ実行する
  }, [])

  // localstorage から値を読み込むための副作用
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      seLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // local が変化したときに、localstorage に値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
    // 依存配列にlocale を渡し、locale が変化するたびに実行するようにする
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>: {timestamp.toLocaleString(locale)} </span>
        <select value={locale} onChange={(e) => seLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}
export default Clock
