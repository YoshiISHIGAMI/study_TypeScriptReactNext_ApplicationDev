const Page = () => {
  const router = useRouter()
  const url = `javascript:alert('ボタンをクリックしました')`

  const onClick = useCallback(() => {
    router.push(url)
  }, [])

  return (
    <div>
      <button onClick={onClick}>ボタンをクリックするとアラートが表示されます</button>
    </div>
  )
}