import type { Character as ICharacter } from '../models/character';
import { selectAffiliations } from '../store/affiliationsSlice';
import { selectRanks } from '../store/ranksSlice';
import { useAppSelector } from '../store/store';
import LoadSVG, { type SvgKey } from './LoadSVG';

interface Props {
    character: ICharacter;
}

const getTitleAndSubtitle = (character: ICharacter) => {
    const [title, rest] = character.alias.split('(');
    let subtitle = '';
    if (rest) {
        subtitle = rest.slice(0, -1);
    }

    return { title, subtitle };
};

const Character = ({ character }: Readonly<Props>) => {
    const affiliations = useAppSelector(
        selectAffiliations(
            character.affiliations.map(
                (affiliation) => affiliation.affiliation_id,
            ),
        ),
    );
    const ranks = useAppSelector(selectRanks(character.rank_ids));

    console.log(character.rank_ids);

    const { subtitle, title } = getTitleAndSubtitle(character);

    return (
        <div className="relative w-[693px] uppercase">
            <div className="absolute top-0 left-0 right-0 h-[16%] flex px-4 py-2 font-mono font-semibold text-xl">
                <div className="grow">
                    <h2>
                        <span className="text-3xl">{title}</span>
                        <span>{subtitle}</span>
                    </h2>
                    <h3>
                        {character.name} / {character.bases_size}
                    </h3>
                </div>
                <div className="shrink-0 flex items-center">
                    {ranks.map((rank) => (
                        <LoadSVG
                            key={rank.id}
                            name={rank.image as SvgKey}
                            title={rank.name}
                        />
                    ))}
                    <div className="rotate-270">RANK</div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[84%]">
                {affiliations.map((affiliation) => (
                    <img
                        key={affiliation.id}
                        className="h-20"
                        src={affiliation.icon}
                    />
                ))}
            </div>
            <img className="w-full" src={character.background} />
        </div>
    );
};

export default Character;
