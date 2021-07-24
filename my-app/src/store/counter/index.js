import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement(state) {
      state.count--;
    },

    reset(state) {
      state.count = 0;
    },

    toggle(state) {
      state.show = !state.show;
    },

    increaseBy(state, action) {
      state.count += action.payload;
    },

    decreaseBy(state, action) {
      state.count -= action.payload;
    },
  },
});

export const counterStore = {
  reducer: counterSlice.reducer,
  actions: counterSlice.actions
}

