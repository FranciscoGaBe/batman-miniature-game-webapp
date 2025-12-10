import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Weapon } from '../models/weapon';

const weaponsAdapter = createEntityAdapter<Weapon>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const weaponsSlice = createSlice({
    name: 'weapons',
    initialState: weaponsAdapter.getInitialState(),
    reducers: {
        weaponsReceived: (state, action: PayloadAction<Weapon[]>) => {
            weaponsAdapter.setAll(state, action.payload);
        },
    },
});

export const { weaponsReceived } = weaponsSlice.actions;
export default weaponsSlice.reducer;

const weaponsSelectors = weaponsAdapter.getSelectors<RootState>(
    (state) => state.weapons,
);

export const selectweapon = (id: number) => (state: RootState) =>
    weaponsSelectors.selectById(state, id);
