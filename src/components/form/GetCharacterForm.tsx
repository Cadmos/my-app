import React, { useState, FormEvent, ChangeEvent } from 'react';
import GetRequest from "../../services/NetworkController";
import IRequest from "../../interfaces/IRequest";
import CharacterType from "../../types/CharacterType";
import ICharacter from "../../interfaces/ICharacter";

type CharacterTypeMapType = {
    [key: string]: CharacterType;
};

const CharacterTypeMap: CharacterTypeMapType = {
    'hero': CharacterType.Hero,
    'monster': CharacterType.Monster,
    'villager': CharacterType.Villager
};

const CharacterForm: React.FC = () => {
    const [characterType, setCharacterType] = useState<CharacterType>(CharacterType.Hero);

    const isValidCharacterType = (value: string): boolean => {
        return value in CharacterTypeMap;
    };

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value = event.target.value;
        if (isValidCharacterType(value)) {
            setCharacterType(CharacterTypeMap[value as keyof typeof CharacterTypeMap]);
        }
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const characterTypeString = Object.keys(CharacterTypeMap).find((key: string) => CharacterTypeMap[key] === characterType);
        if (characterTypeString) {
            const request: IRequest = { SubPath: characterTypeString };
            GetRequest(request).then((data: ICharacter[]) => {
                console.log(data);
            }).catch((error: Error) => {
                console.error(error);
            });
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Character type:
                <select value={characterType} onChange={handleSelectChange}>
                    {Object.values(CharacterType).map((type) => (
                        <option key={type} value={type}>
                            {CharacterTypeMap[type as keyof typeof CharacterTypeMap]}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Get Characters</button>
        </form>
    );
};

export default CharacterForm;