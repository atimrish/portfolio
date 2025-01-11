import {Meta, StoryObj} from "@storybook/react";
import {AboutList} from "@src/widgets/about-list/ui/AboutList";

const meta: Meta<typeof AboutList> = {
    title: 'Компоненты/AboutList',
    component: AboutList
}

export default meta

type Story = StoryObj<typeof AboutList>

export const Default: Story = {
    args: {}
}