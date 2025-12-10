import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Trait } from '../models/trait';

const traitsAdapter = createEntityAdapter<Trait>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const traitsSlice = createSlice({
    name: 'traits',
    initialState: traitsAdapter.getInitialState(),
    reducers: {
        traitsReceived: (state, action: PayloadAction<Trait[]>) => {
            traitsAdapter.setAll(state, action.payload);
        },
    },
});

export const { traitsReceived } = traitsSlice.actions;
export default traitsSlice.reducer;

const traitsSelectors = traitsAdapter.getSelectors<RootState>(
    (state) => state.traits,
);

export const selectTrait = (id: number) => (state: RootState) =>
    traitsSelectors.selectById(state, id);
