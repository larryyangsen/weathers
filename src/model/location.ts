import { ILocation } from '../types/location';

export default (): Promise<ILocation> =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            resolve({
                longitude,
                latitude
            });
        }, reject);
    });
