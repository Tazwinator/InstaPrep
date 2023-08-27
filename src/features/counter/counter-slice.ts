// DUCKS Pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({ 
    name: 'Counter',
    initialState,
    reducers: { 
        // increment
        incremented(state) {
            // it's okay to do thsi because immer make it immutable under the hood
            state.value++;
        },
        //specific amount
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }

        // decrement

        // reset
     }
 });

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;