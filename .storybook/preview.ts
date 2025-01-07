import type {Preview} from "@storybook/react";
import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import {GlobalStyles} from "../src/app/styles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export const decorators = [
    withThemeFromJSXProvider({
      GlobalStyles
    })
]

export default preview;
