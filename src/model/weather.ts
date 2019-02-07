import axios from 'axios';
import { IWeather } from '../types/weather';
import { IForecast } from '../types/forecast';

const appid = process.env.appid || '';
const weatherUrl = new URL('https://api.openweathermap.org/data/2.5/weather');
const forecastUrl = new URL('https://api.openweathermap.org/data/2.5/forecast');
weatherUrl.searchParams.set('appid', appid);
weatherUrl.searchParams.set('units', 'metric');
forecastUrl.searchParams.set('appid', appid);
forecastUrl.searchParams.set('units', 'metric');

export const fetchWeatherFromLatLng = (lat: number, lon: number) => {
    if (!lat || !lon) return {} as IWeather;
    weatherUrl.searchParams.set('lat', lat.toString());
    weatherUrl.searchParams.set('lon', lon.toString());
    return axios
        .get(weatherUrl.href.toString())
        .then(({ data }) => data as IWeather);
};

export const fetchForecastFromLatLng = (lat: number, lon: number) => {
    if (!lat || !lon) return {} as IForecast;
    forecastUrl.searchParams.set('lat', lat.toString());
    forecastUrl.searchParams.set('lon', lon.toString());
    return axios
        .get(forecastUrl.href.toString())
        .then(({ data }) => data as IForecast);
};
