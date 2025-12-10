export interface Weapon {
    id: number;
    name: string;
    rate_of_fire: number | null;
    ammunition: number | null;
    damage: {
        damage_type_id: number;
        count: number;
    }[];
    traits: {
        trait_id: number;
        alternate_name: string | null;
    }[];
}
