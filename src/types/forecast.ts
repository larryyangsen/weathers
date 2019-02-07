import { coord, weather, main as weatherMain, clouds, wind } from './weather';

interface main extends weatherMain {
    temp_kf: number;
    sea_level: number;
    grnd_level: number;
}
interface rain {
    ['3h']: number;
}
interface sys {
    pod: string;
}
export interface list {
    dt: number;
    main: main;
    weather: weather[];
    clouds: clouds;
    wind: wind;
    rain: rain;
    sys: sys;
    dt_txt: string;
}
interface city {
    id: number;
    name: string;
    coord: coord;
    country: string;
}

export interface IForecast {
    cod: string;
    message: number;
    cnt: number;
    list: list[];
    city: city;
}
