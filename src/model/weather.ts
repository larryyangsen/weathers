import axios from 'axios';
import { IWeather } from '../types/weather';
import { IForecast } from '../types/forecast';
const baseUrl = process.env.NODE_ENV === 'DEV' ? 'http://localhost:8080/' : '/';
const weatherUrl = new URL(`${baseUrl}weather`);
const forecastUrl = new URL(`${baseUrl}forecast`);

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
