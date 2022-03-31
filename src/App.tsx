import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return <ThemeProvider theme={theme}>App</ThemeProvider>;
};

export default App;
