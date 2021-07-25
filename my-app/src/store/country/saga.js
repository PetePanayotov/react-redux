import {all , call, put , takeLatest} from "redux-saga/effects"
import { countryStore, FETCH_COUNTRY, SET_COUNTRY } from ".";
import getCountryData from "./service";

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
}


function* fetchCountry(countryName) {

    yield put(countryStore.actions.setCountry(pendingPayload))

    try {

        const response = yield call(() => getCountryData(countryName));

        const data = response.data[0];
    
        const {name , capital , population} = data;

        yield put(countryStore.actions.setCountry({...fulfilledPayload ,  data: {name , capital , population}}))
        
    } catch (error) {
        yield put(countryStore.actions.setCountry(rejectedPayload))
    };

};

export default function* watchFetchCountry() {
    yield takeLatest(FETCH_COUNTRY , (action) => {
        
        const countryName = action.payload;

        return fetchCountry(countryName)
    });
};


