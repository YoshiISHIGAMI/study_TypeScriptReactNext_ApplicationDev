// (1) Linkに指定する方法
import Link from 'next/link'
const Page = (props) => {
  return (
    <Link href="/profile" locale="en">
      <a>英語向けの/profileページへ遷移します</a>
    </Link>
  )
}

// (2) routerに指定する方法
const Page = (props) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push('/profile', { locale: 'ja' })
      }}
    >
      日本語向けの/profileページへ遷移します
    </div>
  )
}