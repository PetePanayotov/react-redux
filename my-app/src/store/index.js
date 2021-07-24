import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { authStore } from "./auth";
import { cartStore } from "./cart";
import { counterStore } from "./counter";
import { countryStore } from "./country";
import { multiplierStore } from "./multiplier";
import rootSaga from "./rootSaga";
import { weatherStore } from "./weather";


const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: {
    multiplierCounter: multiplierStore.reducer,
    counter: counterStore.reducer,
    auth: authStore.reducer,
    cart: cartStore.reducer,
    country: countryStore.reducer,
    weather: weatherStore.reducer
  },
  middleware: [sagaMiddleware]
});


sagaMiddleware.run(rootSaga)
