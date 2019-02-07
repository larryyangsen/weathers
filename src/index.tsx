import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LocationProvider from './context/location';
import WeatherProvider from './context/weather';
import ErrorBoundary from './containers/errorBoundary';
import Location from './containers/location';
import Weather from './containers/weather';

const App = () => (
    <ErrorBoundary>
        <LocationProvider>
            <WeatherProvider>
                <>
                    <Location />
                    <Weather />
                </>
            </WeatherProvider>
        </LocationProvider>
    </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById('app'));
