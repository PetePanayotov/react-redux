
const initialState = {
    data: {},
    isLoading: false,
    loaded: false,
    error: false,
}

export const GET_WEATHER = "GET_WEATHER";
export const SET_WEATHER = "SET_WEATHER";

const fetchWeatherData = (cityName) => ({type: GET_WEATHER , payload: cityName});

const actions = {
    fetchWeatherData
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_WEATHER:

            const {isLoading , loaded , data , error} = action.payload;

            return {
                isLoading,
                loaded,
                data,
                error
            }
    
        default:
            return state;
    }
};

export const weatherStore = {
    reducer,
    actions
}
