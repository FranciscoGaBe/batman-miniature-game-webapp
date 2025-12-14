import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Character } from '../models/character';
import type { RootState } from './store';

const charactersAdapter = createEntityAdapter<Character>({
    sortComparer: (a, b) => a.alias.localeCompare(b.alias),
});

const charactersSlice = createSlice({
    name: 'characters',
    initialState: charactersAdapter.getInitialState(),
    reducers: {
        charactersReceived: (state, action: PayloadAction<Character[]>) => {
            charactersAdapter.setAll(state, action.payload);
        },
    },
});

export const { charactersReceived } = charactersSlice.actions;
export default charactersSlice.reducer;

const charactersSelectors = charactersAdapter.getSelectors<RootState>(
    (state) => state.characters,
);

export const selectCharacter = (id: number) => (state: RootState) =>
    charactersSelectors.selectById(state, id);

export const selectAllCharacters = (state: RootState) =>
    charactersSelectors.selectAll(state);
