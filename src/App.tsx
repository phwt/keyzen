import { ThemeProvider, createTheme } from "@mui/material/styles";
import TypeSection from "./components/TypeSection";
import { PracticeConfigContextProvider } from "./contexts/PracticeConfigContext";
import { PracticeProvider } from "./contexts/PracticeContext";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <PracticeConfigContextProvider>
                <PracticeProvider>
                    <TypeSection />
                </PracticeProvider>
            </PracticeConfigContextProvider>
        </ThemeProvider>
    );
};

export default App;
