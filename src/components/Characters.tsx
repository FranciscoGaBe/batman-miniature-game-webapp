import { useState, type FormEvent } from 'react';
import { selectAllCharacters, selectCharacter } from '../store/charactersSlice';
import { useAppSelector } from '../store/store';
import Character from './Character';

const Characters = () => {
    const [selectedId, setSelectedId] = useState(-1);
    const characters = useAppSelector(selectAllCharacters);
    const character = useAppSelector(selectCharacter(selectedId));

    const handleChange = (event: FormEvent<HTMLSelectElement>) => {
        setSelectedId(+event.currentTarget.value);
    };

    return (
        <div className="grow">
            <select value={selectedId} onChange={handleChange}>
                <option value={-1}>Select</option>
                {characters.map((char) => (
                    <option key={char.id} value={char.id}>
                        {char.alias}
                    </option>
                ))}
            </select>
            {character && <Character character={character} />}
        </div>
    );
};

export default Characters;
