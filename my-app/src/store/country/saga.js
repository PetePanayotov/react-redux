import {all , put , takeLatest} from "redux-saga/effects"
import { FETCH_COUNTRY, SET_COUNTRY } from ".";

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


export function* fetchCountry(countryName) {

    yield put({type: SET_COUNTRY , payload: pendingPayload})

    try {

        const response = yield fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        const data = yield response.json();
    
        const {name , capital , population} = data[0];
    
        yield put(
            {
                type: SET_COUNTRY , 
                payload: {
                    ...fulfilledPayload , 
                    data: {name , capital , population}
                }
            }
        )
        
    } catch (error) {
        yield put({type: SET_COUNTRY , payload: rejectedPayload})
    }

};

export function* watchFetchCountry() {
    yield takeLatest(FETCH_COUNTRY , (action) => {
        
        const countryName = action.payload;

        return fetchCountry(countryName)
    })
};

export default function* countrySaga() {

    yield all([watchFetchCountry()])
}

