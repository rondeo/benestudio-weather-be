import axios from "axios";
import constants from "../config/constants";

export async function getCapitalCity(ip) {
    const response = await axios.get(
        `http://api.ipstack.com/${ip}?access_key=${
            constants.IP_STACK_TOKEN
        }&format=1`
    );
    return response.data.location.capital;
}

export async function getCityWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
    )}&appid=${constants.OPEN_WEATHER_TOKEN}&format=1`;

    const response = await axios.get(url);
    return response.data;
}
