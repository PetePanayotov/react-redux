import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    multiplier: 1
}


const multiplierSlice = createSlice({
    name: "multiplier",
    initialState,
    reducers: {

        multiply(state , action) {

            return {
                ...state,
                multiplier: state.multiplier * action.payload
            }
        },

        divide(state , action) {
            return {
                ...state,
                multiplier: state.multiplier / action.payload
            }
        }
    } 
});


export const multiplierStore = {
    reducer: multiplierSlice.reducer,
    actions: multiplierSlice.actions
}