import {Typography} from './Typography'
import {Meta, StoryObj} from "@storybook/react"
import {css} from "styled-components";

const meta: Meta<typeof Typography.Heading> = {
    title: 'Компоненты/Typography',
    component: Typography.Heading,
}

export default meta

type Story = StoryObj<typeof Typography.Heading>

const TextStyles = css`
    font-size: 40px;
`

export const Heading: Story = {
    args: {
        children: 'Какой-то текст',
        css: TextStyles,
    }
}