import * as React from 'react';
import { weather, main } from '../types/weather';
import './weather-card.css';
interface IProps {
    name: string;
    weather: weather[];
    main: main;
}
const WeatherCard = (props: IProps) => {
    const {
        name,
        weather: [{ icon, description }],
        main: { temp, temp_min, temp_max, pressure, humidity }
    } = props;
    return (
        <div className="weather-card">
            <h1>
                <img
                    alt={description}
                    title={description}
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                />
                {name}/{temp}℃/{temp_min}℃/{temp_max}℃/{pressure}/{humidity}
            </h1>
        </div>
    );
};
export default WeatherCard;
