import { configureStore } from "@reduxjs/toolkit";
import prepReducer from "../features/prep/prep-slice";

export const store = configureStore({
    reducer: {
        prep: prepReducer,
    },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
