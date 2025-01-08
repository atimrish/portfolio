export type Theme = {
    color: string,
    bgColor: string,
    borderColor: string,
}

const light: Theme = {
    color: '#1A1919',
    bgColor: '#FBFBFB',
    borderColor: '#1A1919',
}

const dark: Theme = {
    color: '#FBFBFB',
    bgColor: '#1A1919',
    borderColor: '#FBFBFB',
}

export const themes = {
    light,
    dark
}