import {GlobalStyles} from "@src/app/styles";
import {ThemeProvider} from "@src/app/providers/ThemeProvider";

export const App = () => {
    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
            </ThemeProvider>
        </>
    );
};
