import * as React from 'react';
import { Component } from 'react';
import { WeatherContext } from '../context/weather';
import WeatherCard from '../components/weather-card';
import WeatherList from '../components/forecast-list';

const { useContext } = React;

const Weather = () => {
    const { current, forecast } = useContext(WeatherContext);
    return (
        <>
            <WeatherCard
                name={current.name}
                weather={current.weather}
                main={current.main}
            />
            <WeatherList {...forecast} />
        </>
    );
};

export default Weather;
