import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Layout, layouts } from "../modules/Layouts";

interface IPracticeContext {
    layout: Layout;
    setLayout: (layout: string) => void;
    characters: string;
    word: string;
}

const PracticeContext = createContext<IPracticeContext>({} as IPracticeContext);

export const PracticeProvider = ({ children }: { children: ReactNode }) => {
    const [currentLayout, setCurrentLayout] = useState("qwerty");

    const layout = useMemo(() => {
        const localLayout = layouts.find((l) => l.id === currentLayout);
        if (localLayout) return localLayout;
        throw new Error(`Layout not found: ${currentLayout}`);
    }, [currentLayout]);

    const characters = useMemo(() => {
        return layout.characters;
    }, [layout]);

    return (
        <PracticeContext.Provider
            value={{
                layout,
                setLayout: setCurrentLayout,
                characters,
                word: "arst neio",
            }}
        >
            {children}
        </PracticeContext.Provider>
    );
};

export const usePractice = () => useContext(PracticeContext);
