const Page = () => {
  const url = `javascript:alert('リンクをクリックしました')`
  const isValidURL = useMemo(() => {
    // 先頭がhttpまたはhttpsから始まるかチェック
    return url.match(/^https?:\/\//)
  }, [url])

  return <div>{isValidURL ? <a href={url}>{url}</a> : <span>{url}</span>}</div>
}