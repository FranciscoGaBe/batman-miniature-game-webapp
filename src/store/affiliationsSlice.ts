import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Affiliation } from '../models/affiliation';

const affiliationsAdapter = createEntityAdapter<Affiliation>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const affiliationsSlice = createSlice({
    name: 'affiliations',
    initialState: affiliationsAdapter.getInitialState(),
    reducers: {
        affiliationsReceived: (state, action: PayloadAction<Affiliation[]>) => {
            affiliationsAdapter.setAll(state, action.payload);
        },
    },
});

export const { affiliationsReceived } = affiliationsSlice.actions;
export default affiliationsSlice.reducer;

const affiliationsSelectors = affiliationsAdapter.getSelectors<RootState>(
    (state) => state.affiliations,
);

export const selectAffiliation = (id: number) => (state: RootState) =>
    affiliationsSelectors.selectById(state, id);

export const selectAffiliations = (ids: number[]) => (state: RootState) =>
    ids.map((id) => selectAffiliation(id)(state));
