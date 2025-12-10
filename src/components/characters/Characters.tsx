import { selectCharacter } from '../../store/charactersSlice';
import { useAppSelector } from '../../store/store';
import Card from '../card/Card';

const Characters = () => {
    const character = useAppSelector(selectCharacter(100));

    if (!character) return <div>Not found</div>;

    return <Card character={character} />;
};

export default Characters;
