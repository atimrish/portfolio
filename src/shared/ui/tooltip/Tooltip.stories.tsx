import {Tooltip} from './Tooltip'
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Tooltip> = {
    title: 'Компоненты/Tooltip',
    component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
    args: {
        text: 'Подсказка',
        children: <span>Какой-то текст какой-то текст какой-то текст какой-то текст</span>
    }
}