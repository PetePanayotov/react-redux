import { createAxiosInstance } from "../../utils/axios"
import { baseURLS, endpoints } from "../../config"

const axiosInstance = createAxiosInstance(baseURLS.COUNTRY_API_URL)

export default function* getCountryData(countryName) {
    try {
        return yield axiosInstance.get(endpoints.COUNTRY_API_ENDPOINT(countryName))
    } catch (error) {
        throw new Error()
    };
};