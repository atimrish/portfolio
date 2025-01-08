import {createContext, PropsWithChildren, useContext, useState} from "react";
import {Theme, themes} from './themes'

type Themes = keyof typeof themes

interface IThemeContext {
    theme: Theme
    setTheme: (theme: Themes) => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme: {bgColor: '', borderColor: '', color: ''},
    setTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = (p: PropsWithChildren) => {
    const [currentTheme, setCurrentTheme] = useState<Themes>('light')

    return (
        <ThemeContext.Provider value={{
            theme: themes[currentTheme],
            setTheme: setCurrentTheme,
        }}>
            {p.children}
        </ThemeContext.Provider>
    );
};