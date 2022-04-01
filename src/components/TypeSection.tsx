import { Box } from "@mui/material";
import { useEffect } from "react";
import { usePractice } from "../contexts/PracticeContext";

const textStyle = {
    fontFamily: "Roboto Mono",
    fontSize: "5em",
    whiteSpace: "pre",
};

const TypeSection = () => {
    const { word, input, appendInput } = usePractice();

    useEffect(() => {
        const localAppendInput = ({ key }: { key: string }) => {
            appendInput(key);
        };

        window.addEventListener("keydown", localAppendInput);

        return () => {
            window.removeEventListener("keydown", localAppendInput);
        };
    }, [input]);

    return (
        <Box
            style={{
                width: "100vw",
                height: "100vh",
            }}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div>
                <Box sx={textStyle}>{word}</Box>
                <Box sx={textStyle}>{input ? input : <>&nbsp;</>}</Box>
            </div>
        </Box>
    );
};

export default TypeSection;
