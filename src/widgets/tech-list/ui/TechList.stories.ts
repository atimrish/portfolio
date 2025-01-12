import {Meta, StoryObj} from "@storybook/react";
import {TechList} from "@src/widgets/tech-list/ui/TechList";

const meta: Meta<typeof TechList> = {
    title: 'Компоненты/TechList',
    component: TechList
}

export default meta

type Story = StoryObj<typeof TechList>

export const Default: Story = {
    args: {}
}
