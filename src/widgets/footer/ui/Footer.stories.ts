import {Meta, StoryObj} from "@storybook/react";
import {Footer} from "@src/widgets/footer";

const meta: Meta<typeof Footer> = {
    title: 'Компоненты/Footer',
    component: Footer
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
    args: {}
}