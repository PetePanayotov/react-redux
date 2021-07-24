import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(authState) {
            return {
                ...authState,
                isAuth: true
            }
        },

        logout(authState) {
            return {
                ...authState,
                isAuth: false
            }
        }
    }
});

export const authStore = {
    reducer: authSlice.reducer,
    actions: authSlice.actions
}