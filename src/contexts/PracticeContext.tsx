import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { useConfig } from "./PracticeConfigContext";

const wordLength = 9;

interface IPracticeContext {
    word: string;
    input: string;
    appendInput: (character: string) => void;
}

const PracticeContext = createContext<IPracticeContext>({} as IPracticeContext);

export const PracticeProvider = ({ children }: { children: ReactNode }) => {
    const { characters } = useConfig();
    const [input, setInput] = useState("");

    const appendInput = useCallback(
        (character: string) => {
            if (characters.includes(character)) setInput(input + character);
        },
        [input, characters]
    );

    useEffect(() => {
        if (input.length >= wordLength) setTimeout(() => setInput(""), 150);
    }, [input]);

    return (
        <PracticeContext.Provider
            value={{
                word: "arst neio",
                input,
                appendInput,
            }}
        >
            {children}
        </PracticeContext.Provider>
    );
};

export const usePractice = () => useContext(PracticeContext);
