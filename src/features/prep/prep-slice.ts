// DUCKS Pattern
import { createSlice } from "@reduxjs/toolkit"; //, PayloadAction
import getPrep from "./getPrep";

interface PrepState {
    message: string | undefined;
    loading: boolean;
}

const initialState: PrepState = {
    message: "",
    loading: false,
};

const prepSlice = createSlice({
    name: "Prep",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPrep.pending, (state) => {
                state.message = "loading...";
                state.loading = true;
            })
            .addCase(getPrep.fulfilled, (state, action) => {
                state.message = JSON.stringify(action.payload);
                state.loading = false;
            })
            .addCase(getPrep.rejected, (state, action) => {
                state.message = action.error.message;
                state.loading = false;
            });
    },
});

// export const { incremented, amountAdded } = prepSlice.actions;
export default prepSlice.reducer;
