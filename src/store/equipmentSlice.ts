import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Equipment } from '../models/equipment';

const equipmentAdapter = createEntityAdapter<Equipment>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState: equipmentAdapter.getInitialState(),
    reducers: {
        equipmentReceived: (state, action: PayloadAction<Equipment[]>) => {
            equipmentAdapter.setAll(state, action.payload);
        },
    },
});

export const { equipmentReceived } = equipmentSlice.actions;
export default equipmentSlice.reducer;

const equipmentSelectors = equipmentAdapter.getSelectors<RootState>(
    (state) => state.equipment,
);

export const selectEquipment = (id: number) => (state: RootState) =>
    equipmentSelectors.selectById(state, id);
