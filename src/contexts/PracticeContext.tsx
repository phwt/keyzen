import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useConfig } from "./PracticeConfigContext";

const wordLength = 9;
const minConsecutive = 5;

interface Character {
    value: string;
    consecutive: number;
}

interface IPracticeContext {
    word: string;
    input: string;
    appendInput: (character: string) => void;
    practiceCharacters: Character[];
}

const convertToCharacterStats = (characters: string): Character[] =>
    characters.split("").map((c) => ({
        value: c,
        consecutive: 0,
    }));

const PracticeContext = createContext<IPracticeContext>({} as IPracticeContext);

export const PracticeProvider = ({ children }: { children: ReactNode }) => {
    const { characters } = useConfig();
    const [input, setInput] = useState("");
    const [level, setLevel] = useState(1);
    const [practiceCharacterStats, setPracticeCharacterStats] = useState<
        Character[]
    >(convertToCharacterStats(characters));

    useEffect(() => {
        setPracticeCharacterStats(convertToCharacterStats(characters));
    }, [characters]);

    const trainingCharacters = useMemo(() => {
        return practiceCharacterStats
            .slice(0, level + 1)
            .filter((c) => c.consecutive < minConsecutive)
            .map((c) => c.value);
    }, [level]);

    const trainingWord = useMemo(() => {
        let word = "";
        const trainingLength = trainingCharacters.length;
        for (let i = 0; i < wordLength; i++) {
            word +=
                trainingCharacters[Math.floor(Math.random() * trainingLength)];
        }
        return word;
    }, [trainingCharacters]);

    const appendInput = useCallback(
        (character: string) => {
            if (characters.includes(character)) {
                if (trainingWord[input.length] === character) {
                    // Correct
                    setPracticeCharacterStats(
                        practiceCharacterStats.map((c) => {
                            if (c.value === character) {
                                return {
                                    ...c,
                                    consecutive: c.consecutive + 1,
                                };
                            }
                            return c;
                        })
                    );
                } else {
                    // Incorrect
                    setPracticeCharacterStats(
                        practiceCharacterStats.map((c) => {
                            if (c.value === character) {
                                return {
                                    ...c,
                                    consecutive: 0,
                                };
                            }
                            return c;
                        })
                    );
                }
                setInput(input + character);
            }
        },
        [input, characters, trainingWord]
    );

    useEffect(() => {
        if (input.length >= wordLength) setTimeout(() => setInput(""), 150);
    }, [input]);

    return (
        <PracticeContext.Provider
            value={{
                word: trainingWord,
                input,
                appendInput,
                practiceCharacters: practiceCharacterStats,
            }}
        >
            {children}
        </PracticeContext.Provider>
    );
};

export const usePractice = () => useContext(PracticeContext);
