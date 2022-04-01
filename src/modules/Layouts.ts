export interface Layout {
    id: string;
    name: string;
    characters: string;
}

export const layouts: Layout[] = [
    {
        id: "qwerty",
        name: "QWERTY",
        characters: " jfkdlsahgyturieowpqbnvmcxz",
    },
    {
        id: "azerty",
        name: "AZERTY",
        characters: " jfkdlsmqhgyturieozpabnvcxw",
    },
    {
        id: "colemak",
        name: "Colemak",
        characters: " ntesiroahdjglpufywqbkvmcxz",
    },
    {
        id: "colemak-dhm",
        name: "Colemak DHm",
        characters: " ntesiroamgjblpufywqzkvhdcx",
    },
    {
        id: "colemak-dhm-matrix",
        name: "Colemak DHm Matrix",
        characters: " ntesiroagmjblpufywqvkdhcxz",
    },
    {
        id: "colemak-dhk",
        name: "Colemak DHk",
        characters: " ntesiroakgjblpufywqzmvhdcx",
    },
    {
        id: "norman",
        name: "Norman",
        characters: " ntieosaygjkufrdlw;qbpvmcxz",
    },
    {
        id: "es6",
        name: "ES6",
        characters: " {}',;():.>=</_-|`!?#[]\\+\"@$%&*~^",
    },
];
