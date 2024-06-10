import CharacterType from "./CharacterType";

type CharacterTypeMapType = {
    [key: string]: CharacterType;
};

const CharacterTypeMap = {
    'hero': CharacterType.Hero,
    'monster': CharacterType.Monster,
    'villager': CharacterType.Villager
};

export default CharacterTypeMap;