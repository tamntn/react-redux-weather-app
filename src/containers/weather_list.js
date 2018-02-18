import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';
import moment from 'moment';

class WeatherList extends Component {
    renderWeather(cityData) {
        const id = cityData.city.id;
        const name = cityData.city.name;
        const weatherData = cityData.list.map(weather => {
            return {
                time: moment(weather.dt * 1000).format("ddd, MMM Do, h:mm a"),
                temp: parseInt(weather.main.temp - 273.15),
                pressure: parseInt(weather.main.pressure),
                humidity: weather.main.humidity
            }
        }).slice(0, 23);

        const tempMax = Math.max(...weatherData.map(weather => weatherData.temp));
        const tempMin = Math.min(...weatherData.map(weather => weatherData.temp));
        const pressureMax = Math.max(...weatherData.map(weather => weatherData.pressure));
        const pressureMin = Math.min(...weatherData.map(weather => weatherData.pressure));
        const humidityMax = Math.max(...weatherData.map(weather => weatherData.humidity));
        const humidityMin = Math.min(...weatherData.map(weather => weatherData.humidity));

        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={id}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={weatherData} dataKey="temp" max={tempMax} min={tempMin} color="#c91667" units=" C" /></td>
                <td><Chart data={weatherData} dataKey="pressure" max={pressureMax} min={pressureMin} color="#474d9f" units=" hPa" /></td>
                <td><Chart data={weatherData} dataKey="humidity" max={humidityMax} min={humidityMin} color="#1b8d6e" units=" %" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);