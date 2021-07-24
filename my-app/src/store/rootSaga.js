import { all } from "redux-saga/effects";
import { watchFetchCountry } from "./country/saga";
import { watchFetchWeatherData } from "./weather/saga";

export default function* rootSaga() {
    yield all([watchFetchCountry() , watchFetchWeatherData()])
} 