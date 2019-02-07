import * as React from 'react';
import location from '../model/location';
import { ILocationProviderState } from '../types/location';
import IChildrenProps from '../types/children';

const { useEffect, useState } = React;

export const locationContext = React.createContext(
    {} as ILocationProviderState
);

const { Provider } = locationContext;

const LocationProvider = ({ children }: IChildrenProps) => {
    const [latLonData, setLatLonState] = useState({} as ILocationProviderState);
    const [errorMsg, setErrorMsgState] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const latLon = await location();
                setLatLonState(latLon);
            } catch (error) {
                setErrorMsgState(error);
            }
        })();
    }, []);

    if (errorMsg) {
        throw new Error(errorMsg);
    }
    const { latitude, longitude } = latLonData;

    return <Provider value={{ latitude, longitude }}>{children}</Provider>;
};

export default LocationProvider;
