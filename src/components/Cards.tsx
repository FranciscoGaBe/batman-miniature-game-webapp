import { selectAllCards } from '../store/cardsSlice';
import { useAppSelector } from '../store/store';

const Cards = () => {
    const cards = useAppSelector(selectAllCards);

    return (
        <div className="flex flex-wrap">
            {cards.map((card) => (
                <img src={card.image} />
            ))}
        </div>
    );
};

export default Cards;
