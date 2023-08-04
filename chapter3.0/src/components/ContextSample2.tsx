import React, { useContext } from 'react'

type User = {
  id: number
  name: string
}

// ユーザーデターを保存するContextを作成する
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  // UserContext に Context を渡すことで、Context から値を取得する
  const user = useContext(UserContext)
  return user !== null ? <p>Hello, {user.name} </p> : null
}

const Child = () => {
  const now = new Date()
  return (
    <div>
      <p>Current : {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

const Parent = () => {
  const user: User = {
    id: 1,
    name: 'Alice',
  }

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default Parent
