export const baseURLS = {
    WEATHER_API_URL: "https://api.openweathermap.org",
    COUNTRY_API_URL: "https://restcountries.eu"
};

export const endpoints = {
    WEATHER_API_ENDPOINT: (cityName) => `/data/2.5/weather?q=${cityName}&units=metric&appid=9f02b6cf369ed5a363a78ce2be815314`,
    COUNTRY_API_ENDPOINT: (countryName) => `/rest/v2/name/${countryName}`,
}