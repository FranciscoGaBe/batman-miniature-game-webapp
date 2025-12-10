import type { Affiliation } from '../models/affiliation';
import type { Card } from '../models/card';
import type { Character } from '../models/character';
import type { Equipment } from '../models/equipment';
import type { Trait } from '../models/trait';
import type { Upgrade } from '../models/upgrade';
import type { Weapon } from '../models/weapon';
import { charactersReceived } from '../store/charactersSlice';
import { store } from '../store/store';

const URL = 'https://corsproxy.io/?url=https://app.knightmodels.com/gamedata';

interface Payload {
    affiliations: Affiliation[];
    cards: Card[];
    changelog: string;
    characters: Character[];
    equipment: Equipment[];
    images: string[];
    rule_documents: {
        id: number;
        name: string;
        url: string;
    }[];
    traits: Trait[];
    upgrades: Upgrade[];
    version: number;
    weapons: Weapon[];
}

export const loadGameData = async () => {
    const response = await fetch(URL);
    const json: Payload = await response.json();

    store.dispatch(charactersReceived(json.characters));
};
