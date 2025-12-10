export interface Card {
    id: number;
    count: number;
    affiliation_id: number | null;
    image: string;
    name: string;
    objective_type_id: number;
    preventing_trait_id: number | null;
    rank_ids: number[];
    required_characters_ids: number[];
    trait_id: number | null;
    vp: number;
}
