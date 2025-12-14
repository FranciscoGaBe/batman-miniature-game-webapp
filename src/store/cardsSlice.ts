import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Card } from '../models/card';

const cardsAdapter = createEntityAdapter<Card>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const cardsSlice = createSlice({
    name: 'cards',
    initialState: cardsAdapter.getInitialState(),
    reducers: {
        cardsReceived: (state, action: PayloadAction<Card[]>) => {
            cardsAdapter.setAll(state, action.payload);
        },
    },
});

export const { cardsReceived } = cardsSlice.actions;
export default cardsSlice.reducer;

const cardsSelectors = cardsAdapter.getSelectors<RootState>(
    (state) => state.cards,
);

export const selectCard = (id: number) => (state: RootState) =>
    cardsSelectors.selectById(state, id);

export const selectAllCards = (state: RootState) =>
    cardsSelectors.selectAll(state);
