import CharacterType from "./CharacterType";

type CharacterTypeMapType = {
    [key: string]: CharacterType;
};

const CharacterTypeMap: CharacterTypeMapType = {
    'hero': CharacterType.Hero,
    'monster': CharacterType.Monster,
    'villager': CharacterType.Villager
};

export default CharacterTypeMap;