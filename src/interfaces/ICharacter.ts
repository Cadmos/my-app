import CharacterType from "../types/CharacterType";

interface Character {
    id: number;
    name: string;
    type: CharacterType;
    getTypeString(): string;
}

export default Character;