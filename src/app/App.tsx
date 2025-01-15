import {GlobalStyles} from "@src/app/styles";
import {ThemeProvider} from "@src/app/providers/ThemeProvider";
import {LandingPage} from "@src/pages/landing/ui/LandingPage";
import {StrictMode} from "react";

export const App = () => {
    return (
        <>
            <StrictMode>
                <ThemeProvider>
                    <GlobalStyles />
                    <LandingPage/>
                </ThemeProvider>
            </StrictMode>
        </>
    );
};
