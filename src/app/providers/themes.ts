import darkCover from '@src/shared/ui/assets/images/light_cover.png'
import lightCover from '@src/shared/ui/assets/images/dark_cover.png'

import linkIconLight from '@src/shared/ui/assets/images/preview_link_light.png'
import linkIconDark from '@src/shared/ui/assets/images/preview_link_dark.png'

export type Theme = {
    color: string,
    bgColor: string,
    borderColor: string,
    imageCover: string,
    linkIcon: string,
}

const light: Theme = {
    color: '#1A1919',
    bgColor: '#FBFBFB',
    borderColor: '#1A1919',
    imageCover: lightCover,
    linkIcon: linkIconLight,
}

const dark: Theme = {
    color: '#FBFBFB',
    bgColor: '#1A1919',
    borderColor: '#FBFBFB',
    imageCover: darkCover,
    linkIcon: linkIconDark,
}

export const themes = {
    light,
    dark
}