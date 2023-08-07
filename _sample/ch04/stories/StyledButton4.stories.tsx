import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

export default {
  title: 'StyledButton (4) - Controlを使用する',
  component: StyledButton,
  argTypes: {
    // propsに渡すvariantをStorybookから変更できるように追加
    variant: {
      // ラジオボタンで設定できるように指定
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    // propsに渡すchildrenをStorybookから変更できるように追加
    children: {
      // テキストボックスで入力できるように指定
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof StyledButton>

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({})

// デフォルトのpropsを設定する
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}