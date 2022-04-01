import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Layout, layouts } from "../modules/Layouts";

interface IPracticeConfigContext {
    layout: Layout;
    setLayout: (layout: string) => void;
    characters: string;
}

const PracticeConfigContext = createContext<IPracticeConfigContext>(
    {} as IPracticeConfigContext
);

export const PracticeConfigContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
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
        <PracticeConfigContext.Provider
            value={{
                layout,
                setLayout: setCurrentLayout,
                characters,
            }}
        >
            {children}
        </PracticeConfigContext.Provider>
    );
};

export const useConfig = () => useContext(PracticeConfigContext);
