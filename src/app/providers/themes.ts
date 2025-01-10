import darkCover from '@src/shared/ui/assets/images/cover/dark.png'
import lightCover from '@src/shared/ui/assets/images/cover/light.png'

import linkIconLight from '@src/shared/ui/assets/images/preview-link/light.png'
import linkIconDark from '@src/shared/ui/assets/images/preview-link/dark.png'

import searchIconLight from '@src/shared/ui/assets/images/search-icon/light.png'
import searchIconDark from '@src/shared/ui/assets/images/search-icon/dark.png'

export type Theme = {
    color: string,
    bgColor: string,
    borderColor: string,
    imageCover: string,
    linkIcon: string,
    searchIcon: string,
}

const light: Theme = {
    color: '#1A1919',
    bgColor: '#FBFBFB',
    borderColor: '#1A1919',
    imageCover: lightCover,
    linkIcon: linkIconLight,
    searchIcon: searchIconLight,
}

const dark: Theme = {
    color: '#FBFBFB',
    bgColor: '#1A1919',
    borderColor: '#FBFBFB',
    imageCover: darkCover,
    linkIcon: linkIconDark,
    searchIcon: searchIconDark,
}

export const themes = {
    light,
    dark
}