import { useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'
// 新しくactionをインポート
import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton (3) - 動的にactionを呼び出す',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

// incrementという名前でactionを出力するための関数をつくる
const incrementAction = action('increment')

export const Primary: Story<StyledButtonProps> = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    // 現在のカウントを渡して、Actionを呼ぶ
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}