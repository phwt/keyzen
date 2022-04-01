import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { usePractice } from "../contexts/PracticeContext";

const textStyle = {
    fontFamily: "Roboto Mono",
    fontSize: "5em",
};

const TypeSection = () => {
    const [currentInput, setCurrentInput] = useState("");
    const { characters, word } = usePractice();

    useEffect(() => {
        const appendInput = ({ key }: { key: string }) => {
            if (characters.includes(key)) setCurrentInput(currentInput + key);
        };

        window.addEventListener("keydown", appendInput);

        return () => {
            window.removeEventListener("keydown", appendInput);
        };
    }, [currentInput]);

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
                <Box sx={textStyle}>
                    {currentInput ? currentInput : <>&nbsp;</>}
                </Box>
            </div>
        </Box>
    );
};

export default TypeSection;
