const Page = () => {
  const url = `javascript:alert('リンクをクリックしました')`

  return (
    <div>
      <a href={url}>リンクをクリックするとアラートが表示されます</a>
      <Link href={url}>
        <a>Nextのリンクでも同じように表示されます</a>
      </Link>
    </div>
  )
}