import {WorkCard} from './WorkCard'
import {Meta, StoryObj} from "@storybook/react"
import {Typography} from "@src/shared/ui/typography";

import ReactIcon from '@src/shared/ui/assets/images/techs/react.png'
import ExpressIcon from '@src/shared/ui/assets/images/techs/express.png'

const meta: Meta<typeof WorkCard> = {
    title: 'Компоненты/WorkCard',
    component: WorkCard,
}

export default meta

type Story = StoryObj<typeof WorkCard>



export const Default: Story = {
    args: {
        year: 2024,
        month: 'август',
        job: 'Fullstack Developer',
        durationTime: '1 год',
        renderDescription: () => <Typography.Paragraph>Какое-то описание</Typography.Paragraph>,
        techsImageSources: [ReactIcon, ExpressIcon],
    }
}