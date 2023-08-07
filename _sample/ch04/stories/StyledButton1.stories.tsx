import { ComponentMeta, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'

// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'StyledButton (1)',
  // 使用するコンポーネント
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary: Story<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}

export const Success: Story<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Primary
    </StyledButton>
  )
}

export const Transparent: Story<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}