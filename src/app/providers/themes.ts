import darkCover from '@src/shared/ui/assets/images/cover/dark.png'
import lightCover from '@src/shared/ui/assets/images/cover/light.png'

import linkIconLight from '@src/shared/ui/assets/images/preview-link/light.png'
import linkIconDark from '@src/shared/ui/assets/images/preview-link/dark.png'

import searchIconLight from '@src/shared/ui/assets/images/search-icon/light.png'
import searchIconDark from '@src/shared/ui/assets/images/search-icon/dark.png'

import themeIconLight from '@src/shared/ui/assets/images/theme-icon/light.png'
import themeIconDark from '@src/shared/ui/assets/images/theme-icon/dark.png'

import educationIconLight from '@src/shared/ui/assets/images/education-icon/light.png'
import educationIconDark from '@src/shared/ui/assets/images/education-icon/dark.png'

import awardIconLight from '@src/shared/ui/assets/images/award-icon/light.png'
import awardIconDark from '@src/shared/ui/assets/images/award-icon/dark.png'

const light: Theme = {
    name: 'light',
    color: '#1A1919',
    bgColor: '#FBFBFB',
    borderColor: '#1A1919',
    imageCover: lightCover,
    linkIcon: linkIconLight,
    searchIcon: searchIconLight,
    themeIcon: themeIconLight,
    educationIcon: educationIconLight,
    awardIcon: awardIconLight
}

const dark: Theme = {
    name: 'dark',
    color: '#FBFBFB',
    bgColor: '#1A1919',
    borderColor: '#FBFBFB',
    imageCover: darkCover,
    linkIcon: linkIconDark,
    searchIcon: searchIconDark,
    themeIcon: themeIconDark,
    educationIcon: educationIconDark,
    awardIcon: awardIconDark
}


export const themes = {
    light,
    dark
}

export type Theme = {
    name: keyof typeof themes,
    color: string,
    bgColor: string,
    borderColor: string,
    imageCover: string,
    linkIcon: string,
    searchIcon: string,
    themeIcon: string,
    educationIcon: string,
    awardIcon: string,
}


