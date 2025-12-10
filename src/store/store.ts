import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import affiliationsReducer from './affiliationsSlice';
import cardsReducer from './cardsSlice';
import charactersReducer from './charactersSlice';
import equipmentReducer from './equipmentSlice';
import traitsReducer from './traitsSlice';
import upgradesReducer from './upgradesSlice';
import weaponsReducer from './weaponsSlice';

export const store = configureStore({
    reducer: {
        affiliations: affiliationsReducer,
        cards: cardsReducer,
        characters: charactersReducer,
        equipment: equipmentReducer,
        traits: traitsReducer,
        upgrades: upgradesReducer,
        weapons: weaponsReducer,
    },
});

// Type definitions for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
