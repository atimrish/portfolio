import {Meta, StoryObj} from "@storybook/react";
import {ContactList} from "@src/widgets/contact-list/ui/ContactList";

const meta: Meta<typeof ContactList> = {
    title: 'Компоненты/ContactList',
    component: ContactList,
}

export default meta

type Story = StoryObj<typeof ContactList>

export const Default: Story = {
    args: {}
}