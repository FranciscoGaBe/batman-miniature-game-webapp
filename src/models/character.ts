export interface Character {
    id: number;
    name: string;
    alias: string;
    affiliations: {
        affiliation_id: number;
        can_be_team_boss: boolean;
        always_team_boss: boolean;
        rank_ids: number[];
    }[];
    rival_affiliation_ids: number[];
    rank_ids: number[];
    weapon_ids: number[];
    image: string;
    background: string;
    willpower: number;
    strength: number;
    movement: number;
    attack: number;
    defense: number;
    special: number;
    endurance: number;
    reputation: number;
    funding: number;
    eternal: false;
    bases_size: string;
    traits: {
        trait_id: number;
        alternate_name: string | null;
    }[];
    linked_to_characters: number[];
    linked_characters: number[];
    shares_profile_in_game: boolean;
    shares_equipment: boolean;
    ignores_costs: boolean;
    can_be_taken_individually: boolean;
    adds_to_model_count: boolean;
    adds_to_rank_count: boolean;
    upgrade_ids: number[];
}
