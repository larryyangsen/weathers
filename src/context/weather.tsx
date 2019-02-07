import * as React from 'react';
import IChildrenProps from '../types/children';
import { IWeather, IWeatherState } from '../types/weather';
import { IForecast } from '../types/forecast';
import {
    fetchWeatherFromLatLng,
    fetchForecastFromLatLng
} from '../model/weather';
import { locationContext } from './location';

const { useContext, useState, useEffect } = React;

const initState: IWeatherState = {
    current: {} as IWeather,
    forecast: {} as IForecast
};
export const WeatherContext = React.createContext({} as IWeatherState);
const { Provider } = WeatherContext;
const WeatherProvider = ({ children }: IChildrenProps) => {
    const { latitude, longitude } = useContext(locationContext);
    const [current, setCurrent] = useState(initState.current);
    const [forecast, setForecast] = useState(initState.forecast);
    const [errorMsg, setErrorMsgState] = useState('');
    useEffect(
        () => {
            (async () => {
                try {
                    const currentData = await fetchWeatherFromLatLng(
                        latitude,
                        longitude
                    );
                    const forecastData = await fetchForecastFromLatLng(
                        latitude,
                        longitude
                    );
                    console.log(forecastData);
                    setCurrent(currentData);
                    setForecast(forecastData);
                } catch (error) {
                    setErrorMsgState(error);
                }
            })();
        },
        [latitude, longitude]
    );

    if (errorMsg) {
        throw new Error(errorMsg);
    }
    if (!current || !current.main) {
        return <div>Loading...</div>;
    }
    return <Provider value={{ current, forecast }}>{children}</Provider>;
};

export default WeatherProvider;
