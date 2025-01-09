import type {Preview} from "@storybook/react";
import {GlobalStyles} from "../src/app/styles";
import {ThemeContext} from "../src/app/providers/ThemeProvider";
import {themes} from "../src/app/providers/themes";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story, options) => {
            return (
                <ThemeContext.Provider value={{
                    theme: themes[options.globals.theme as keyof typeof themes],
                    setTheme: () => {}
                }}>
                    <GlobalStyles/>
                    <Story {...options} />
                </ThemeContext.Provider>
            )
        }

    ],
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            toolbar: {
                icon: 'circlehollow',
                items: [
                    { value: 'light', icon: 'circlehollow', title: 'light' },
                    { value: 'dark', icon: 'circle', title: 'dark' },
                ],
                showName: true,
            }
        },
    },
    initialGlobals: {
        theme: 'light'
    }
}

export default preview;
