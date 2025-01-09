import darkCover from '@src/shared/ui/assets/images/light_cover.png'
import lightCover from '@src/shared/ui/assets/images/dark_cover.png'

export type Theme = {
    color: string,
    bgColor: string,
    borderColor: string,
    imageCover: string
}

const light: Theme = {
    color: '#1A1919',
    bgColor: '#FBFBFB',
    borderColor: '#1A1919',
    imageCover: lightCover
}

const dark: Theme = {
    color: '#FBFBFB',
    bgColor: '#1A1919',
    borderColor: '#FBFBFB',
    imageCover: darkCover
}

export const themes = {
    light,
    dark
}