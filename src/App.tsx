import { ThemeProvider, createTheme } from "@mui/material/styles";
import TypeSection from "./components/TypeSection";
import { PracticeProvider } from "./contexts/PracticeContext";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <PracticeProvider>
                <TypeSection />
            </PracticeProvider>
        </ThemeProvider>
    );
};

export default App;
