import { configureStore } from '@reduxjs/toolkit';
import personajeReducer from './personajeSlice'

export const store = configureStore({
    reducer:{
        personaje: personajeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;