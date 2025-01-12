import {CanvasImage} from './CanvasImage'
import {Meta, StoryObj} from "@storybook/react"
import imageSrc from '@src/shared/ui/assets/images/techs/javascript.png'

const meta: Meta<typeof CanvasImage> = {
    title: 'Компоненты/CanvasImage',
    component: CanvasImage
}

export default meta

type Story = StoryObj<typeof CanvasImage>

export const Default: Story = {
    args: {
        width: 128,
        height: 128,
        imageSource: imageSrc
    }
}