import axios from 'axios';

const API_KEY = '7599694f88ade586947010b6fd96f939';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const actionType = {
    FETCH_WEATHER: 'FETCH_WEATHER',
    CLEAR_WEATHER: 'CLEAR_WEATHER'
}

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url); //return a promise

    console.log('Request: ', request);

    return {
        type: actionType.FETCH_WEATHER,
        payload: request
    }
}

export function clearWeather() {
    return {
        type: actionType.CLEAR_WEATHER,
        payload: []
    }
}