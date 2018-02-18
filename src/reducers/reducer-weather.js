import { actionType } from '../actions/index';

export default function (state = [], action) {
    if (action.error) {
        alert('City Not Found 🤯');
        return state;
    }

    switch (action.type) {
        case actionType.FETCH_WEATHER:
            localStorage.setItem('weather', JSON.stringify([action.payload.data, ...state])); // New ES6 syntax
            return JSON.parse(localStorage.getItem('weather'));
        case actionType.CLEAR_WEATHER:
            return action.payload;
    }

    // If there is item in localstorage, set state to the localstorage object
    if (localStorage.weather) {
        return JSON.parse(localStorage.getItem('weather'));
    }

    return state;
}