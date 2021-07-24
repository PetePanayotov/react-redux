import {all , put , takeLatest} from "redux-saga/effects";
import { GET_WEATHER, SET_WEATHER } from ".";


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

export function* fetchWeatherData(cityName) {

    yield put({type: SET_WEATHER , payload: pendingPayload})

    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9f02b6cf369ed5a363a78ce2be815314`);
        const data = yield response.json()

        const {name , main: {temp}} = data;

        yield put(
            {
                type: SET_WEATHER,
                payload: {
                    ...fulfilledPayload,
                    data: {
                        cityName: name,
                        temperature: temp
                    }
                }
            }
        );



    } catch (error) {
        yield put({type: SET_WEATHER , payload: rejectedPayload})
    }

};

export function* watchFetchWeatherData() {

    yield takeLatest(GET_WEATHER , (action) => {
        const cityName = action.payload;

        return fetchWeatherData(cityName)
    })
}