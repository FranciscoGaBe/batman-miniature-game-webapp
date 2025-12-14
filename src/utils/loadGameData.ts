import type { Affiliation } from '../models/affiliation';
import type { Card } from '../models/card';
import type { Character } from '../models/character';
import type { Equipment } from '../models/equipment';
import type { Trait } from '../models/trait';
import type { Upgrade } from '../models/upgrade';
import type { Weapon } from '../models/weapon';
import { affiliationsReceived } from '../store/affiliationsSlice';
import { cardsReceived } from '../store/cardsSlice';
import { charactersReceived } from '../store/charactersSlice';
import { equipmentReceived } from '../store/equipmentSlice';
import { store } from '../store/store';
import { traitsReceived } from '../store/traitsSlice';
import { upgradesReceived } from '../store/upgradesSlice';
import { weaponsReceived } from '../store/weaponsSlice';

const URL = 'https://corsproxy.io/?url=https://app.knightmodels.com/gamedata';
const STORAGE_KEY = 'game_data';

interface Data {
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

const getStoredData = () => {
    const storedData = window.localStorage.getItem(STORAGE_KEY);
    if (!storedData) return null;
    return JSON.parse(storedData) as Data;
};

const saveStoredData = (data: Data) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const fetchGameData = async () => {
    const response = await fetch(URL);
    const data: Data = await response.json();
    saveStoredData(data);
    return data;
};

const loadDataIntoStore = (data: Data) => {
    store.dispatch(affiliationsReceived(data.affiliations));
    store.dispatch(cardsReceived(data.cards));
    store.dispatch(charactersReceived(data.characters));
    store.dispatch(equipmentReceived(data.equipment));
    store.dispatch(traitsReceived(data.traits));
    store.dispatch(upgradesReceived(data.upgrades));
    store.dispatch(weaponsReceived(data.weapons));
};

export const loadGameData = async () => {
    let data = getStoredData();
    if (!data) {
        data = await fetchGameData();
    }
    loadDataIntoStore(data);
};
