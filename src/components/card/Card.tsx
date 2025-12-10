import type { Character } from '../../models/character';

interface Props {
    character: Character;
}

const Card = ({ character }: Readonly<Props>) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt="" />
        </div>
    );
};

export default Card;
