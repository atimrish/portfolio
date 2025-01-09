import {ProjectCard} from './ProjectCard'
import {Meta, StoryObj} from "@storybook/react"
import TechSrc from '@src/shared/ui/assets/images/react.png'
import TechSrc2 from '@src/shared/ui/assets/images/typescript.png'
import CoverImage from '@src/shared/ui/assets/images/react.png'

const meta: Meta<typeof ProjectCard> = {
    title: 'Компоненты/ProjectCard',
    component: ProjectCard,
}

export default meta

type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
    args: {
        heading: 'Название проекта',
        description: 'описание проекта описание проекта описание проекта описание проекта описание проекта ',
        techImageSources: [TechSrc, TechSrc2],
        githubLink: '#blank',
        previewLink: '#blank',
        projectCover: CoverImage
    }
}