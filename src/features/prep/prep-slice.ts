// DUCKS Pattern
import { createSlice } from "@reduxjs/toolkit"; //, PayloadAction
import getPrep from "./getPrep";

interface PrepState {
    message: string | undefined;
}

const initialState: PrepState = {
    message: "",
};

const prepSlice = createSlice({
    name: "Prep",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPrep.pending, (state) => {
                state.message = "loading...";
            })
            .addCase(getPrep.fulfilled, (state, action) => {
                state.message = JSON.stringify(action.payload);
            })
            .addCase(getPrep.rejected, (state, action) => {
                state.message = action.error.message;
            });
    },
});

// export const { incremented, amountAdded } = prepSlice.actions;
export default prepSlice.reducer;
