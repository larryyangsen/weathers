import * as React from 'react';
import WeatherCard from './weather-card';
import { IForecast } from '../types/forecast';
import './forecast-list.css';
const ForecastList = (props: IForecast) => {
    const { list, city } = props;
    if (!list) return <div />;
    return (
        <div className="forecast-list">
            {list.map((weather, index) => (
                <div key={index}>
                    <h1>{new Date(weather.dt * 1000).toLocaleString()}</h1>
                    <WeatherCard
                        name={city.name}
                        weather={weather.weather}
                        main={weather.main}
                    />
                </div>
            ))}
        </div>
    );
};

export default ForecastList;
