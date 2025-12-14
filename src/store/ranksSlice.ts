import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Rank } from '../models/rank';

const ranksAdapter = createEntityAdapter<Rank>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const ranksSlice = createSlice({
    name: 'ranks',
    initialState: ranksAdapter.getInitialState(undefined, [
        {
            id: 1,
            name: 'Leader',
            image: 'rank_leader',
        },
        {
            id: 2,
            name: 'Sidekick',
            image: 'rank_sidekick',
        },
    ]),
    reducers: {},
});

// export const {} = ranksSlice.actions;
export default ranksSlice.reducer;

const ranksSelectors = ranksAdapter.getSelectors<RootState>(
    (state) => state.ranks,
);

export const selectRank = (id: number) => (state: RootState) =>
    ranksSelectors.selectById(state, id);

export const selectRanks = (ids: number[]) => (state: RootState) =>
    ids.map((id) => selectRank(id)(state));
