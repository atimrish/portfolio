import {SearchInput} from './SearchInput'
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof SearchInput> = {
    title: 'Компоненты/SearchInput',
    component: SearchInput,
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
    args: {

    }
}