import {Meta, StoryObj} from "@storybook/react";
import {AnimatedCanvas} from "./AnimatedCanvas";

const meta: Meta<typeof AnimatedCanvas> = {
    title: 'Компоненты/AnimatedCanvas',
    component: AnimatedCanvas
}

export default meta

type Story = StoryObj<typeof AnimatedCanvas>

export const Default: Story = {
    args: {
        width: 100,
        height: 100,
    }
}
