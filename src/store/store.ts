import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
    },
});

// Type definitions for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
