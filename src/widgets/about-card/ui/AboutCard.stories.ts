import {Meta, StoryObj} from "@storybook/react";
import {AboutCard} from "@src/widgets/about-card/ui/AboutCard";

const meta: Meta<typeof AboutCard> = {
    title: 'Компоненты/AboutCard',
    component: AboutCard
}

export default meta

type Story = StoryObj<typeof AboutCard>

export const Default: Story = {
    args: {
        variant: 'education'
    },
}
