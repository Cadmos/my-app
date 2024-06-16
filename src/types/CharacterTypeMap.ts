import CharacterType from "./CharacterType";

type CharacterTypeMap = Record<keyof typeof CharacterType, string>;

const CharacterTypeMap: CharacterTypeMap = {
    Hero: 'hero',
    Monster: 'monster',
    Villager: 'villager'
};

export default CharacterTypeMap;