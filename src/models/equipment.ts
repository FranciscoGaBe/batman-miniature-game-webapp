export interface Equipment {
    id: number;
    name: string;
    description: string;
    max_count: number;
    funding: number;
    reputation: number;
    image: string | null;
    banned_character_ids: number[];
    banned_crew_equipment_ids: number[];
    required_character_ids: number[];
    required_crew_character_ids: number[];
    required_rank_ids: number[];
    required_affiliation_ids: number[];
    weapon_ids: number[];
    traits: number[];
    willpower: number;
    strength: number;
    movement: number;
    attack: number;
    defense: number;
    special: number;
    endurance: number;
    ammunition: number;
    granted_weapon_id: number | null;
}
