// src/components/ContainerSample.tsx
import React from 'react'

// React17以前ではFCを指定した場合、
// childrenがpropsに暗黙的に含まれています
type ContainerProps = {
  title: string
}

const Container: React.FC<ContainerProps> = (props) => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

// React17以前ではchildrenを使用しない場合、VFCを指定します
const Parent: React.VFC = () => {
  return (
    <Container>
      <p>ここの部分は背景色で囲まれています</p>
    </Container>
  )
}
