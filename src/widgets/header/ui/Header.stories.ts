import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./Header";

const meta: Meta<typeof Header> = {
    title: 'Компоненты/Header',
    component: Header
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
    args: {}
}