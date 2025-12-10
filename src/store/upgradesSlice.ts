import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Upgrade } from '../models/upgrade';

const upgradesAdapter = createEntityAdapter<Upgrade>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const upgradesSlice = createSlice({
    name: 'upgrades',
    initialState: upgradesAdapter.getInitialState(),
    reducers: {
        upgradesReceived: (state, action: PayloadAction<Upgrade[]>) => {
            upgradesAdapter.setAll(state, action.payload);
        },
    },
});

export const { upgradesReceived } = upgradesSlice.actions;
export default upgradesSlice.reducer;

const upgradesSelectors = upgradesAdapter.getSelectors<RootState>(
    (state) => state.upgrades,
);

export const selectupgrade = (id: number) => (state: RootState) =>
    upgradesSelectors.selectById(state, id);
