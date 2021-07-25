import {call, put , takeLatest} from "redux-saga/effects";
import {GET_WEATHER, weatherStore} from ".";
import getWeaterData from "./service";


const pendingPayload = {
    isLoading: true,
    loaded: false,
    data: {},
    error: false,
};

const fulfilledPayload = {
    isLoading: false,
    loaded: true,
    data: {},
    error: false
};

const rejectedPayload = {
    isLoading: false,
    loaded: true,
    data: {},
    error: true
};

function* fetchWeatherData(cityName) {

    yield put(weatherStore.actions.setWeatherData(pendingPayload));

    try {

        const response = yield call(() => getWeaterData(cityName));

        const {name , main: {temp}} = response.data;

        yield put(weatherStore.actions.setWeatherData({...fulfilledPayload , data: {cityName: name, temperature: temp}}));

    } catch (error) {

        yield put(weatherStore.actions.setWeatherData(rejectedPayload));

    };

};

export default function* watchFetchWeatherData() {

    yield takeLatest(GET_WEATHER , (action) => {
        const cityName = action.payload;

        return fetchWeatherData(cityName)
    });
};