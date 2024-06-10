import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { GetRequest, PostRequest } from '../services/NetworkController';
import IRequest from '../interfaces/IRequest';

// Define the type for your hero data
interface IHero {
    id: number;
    name: string;
}

const HeroesComponent = () => {
    const [heroes, setHeroes] = useState<IHero[]>([]);
    const [newHeroName, setNewHeroName] = useState<string>('');

    useEffect(() => {
        const fetchHeroes = async () => {
            const request: IRequest = { SubPath: 'heroes' };
            const data = await GetRequest(request);
            setHeroes(data);
        };
        fetchHeroes();
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewHeroName(event.target.value);
    };

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const url = `${process.env.REACT_APP_API_URL}/heroes`;
        const newHero = await PostRequest(url, { name: newHeroName });
        setHeroes([...heroes, newHero]);
        setNewHeroName('');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Hero name:
                    <input type="text" value={newHeroName} onChange={handleInputChange} />
                </label>
                <button type="submit">Add Hero</button>
            </form>
            <ul>
                {heroes.map((hero: IHero) => (
                    <li key={hero.id}>{hero.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeroesComponent;