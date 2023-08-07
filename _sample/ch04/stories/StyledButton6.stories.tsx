import { ComponentMeta, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'StyledButton (6) - Linkを使用する',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary: Story<StyledButtonProps> = (props) => {
  // クリックしたらStyledButton/Successのストーリーへ遷移する
  return (
    <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton (6) - Linkを使用する', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success: Story<StyledButtonProps> = (props) => {
  // クリックしたらStyledButton/Transparentのストーリーへ遷移する
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton (6) - Linkを使用する', 'Transparent')}>
      Primary
    </StyledButton>
  )
}

export const Transparent: Story<StyledButtonProps> = (props) => {
  // クリックしたらStyledButton/Primaryのストーリーへ遷移する
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton (6) - Linkを使用する', 'Primary')}>
      Transparent
    </StyledButton>
  )
}