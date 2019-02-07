import * as React from 'react';
import { locationContext } from '../context/location';
import GoogleMap from '../components/google-map';

const { useContext } = React;

const Location = () => {
    const { latitude, longitude } = useContext(locationContext);
    return <GoogleMap latitude={latitude} longitude={longitude} />;
};
export default Location;
