import { IForecast } from './forecast';

export interface coord {
    lan: number;
    lat: number;
}

export interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}
export interface wind {
    speed: number;
    deg: number;
}
export interface clouds {
    all: number;
}

export interface sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunries: number;
    sunset: number;
}

export interface IWeather {
    coord: coord;
    weather: weather[];
    base: string;
    main: main;
    visibility: number;
    wind: wind;
    clouds: clouds;
    dt: number;
    sys: sys;
    id: number;
    name: string;
    cod: number;
}

export interface IWeatherState {
    forecast: IForecast;
    current: IWeather;
}
