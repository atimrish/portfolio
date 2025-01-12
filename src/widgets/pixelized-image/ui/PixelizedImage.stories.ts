import {PixelizedImage} from './PixelizedImage'
import {Meta, StoryObj} from "@storybook/react"
import imageSrc from '@src/shared/ui/assets/images/techs/webpack.png'

const meta: Meta<typeof PixelizedImage> = {
    title: 'Компоненты/PixelizedImage',
    component: PixelizedImage,
}

export default meta

type Story = StoryObj<typeof PixelizedImage>

export const Default: Story = {
    args: {
        imageSource: imageSrc,
        deviation: 70
    }
}