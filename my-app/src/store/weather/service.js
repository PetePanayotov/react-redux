import  {} from "redux-saga/effects";
import { baseURLS, endpoints } from "../../config";
import { createAxiosInstance } from "../../utils/axios";

const axiosInstance = createAxiosInstance(baseURLS.WEATHER_API_URL)

export default function* getWeaterData(cityName) {

    try {

        return yield axiosInstance.get(endpoints.WEATHER_API_ENDPOINT(cityName))
        
    } catch (error) {
        throw new Error()
    }
};