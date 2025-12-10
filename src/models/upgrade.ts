export interface Upgrade {
    id: number;
    rank_id: number | null;
    name: string;
    bases_size: string;
    image: string;
    willpower: number;
    strength: number;
    movement: number;
    attack: number;
    defense: number;
    special: number;
    endurance: number;
    reputation: number;
    funding: number;
    eternal: boolean;
    weapon_ids: number[];
    traits: {
        trait_id: number;
        alternate_name: string | null;
    }[];
}
