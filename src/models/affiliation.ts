export interface Affiliation {
    id: number;
    app_order: number;
    deck_size: number;
    name: string;
    image: string;
    affiliation_keyword_boss_must_be_leader: boolean;
    affiliation_keyword_trait_ids: number[];
    can_include_characters_with_same_name: boolean;
    eternal: boolean;
    icon: string;
    is_team: boolean;
    must_select_leader_as_boss: boolean;
    only_allow_affiliation_cards: boolean;
    only_allow_affiliation_characters: boolean;
    only_allow_affiliation_keyword_cards: boolean;
    only_allow_affiliation_keyword_characters: boolean;
}
