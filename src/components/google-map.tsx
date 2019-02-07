import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { ILocation } from '../types/location';
import Marker from './google-map-marker';
const mapStyle = {
    height: '360px',
    width: '100%'
};
const defaultCenter = {
    lat: 0,
    lng: 0
};
const key = process.env.googlemapkey || '';
export default ({ latitude, longitude }: ILocation) => {
    return (
        <div style={mapStyle}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key
                }}
                defaultCenter={defaultCenter}
                center={{
                    lat: latitude,
                    lng: longitude
                }}
                defaultZoom={15}>
                <Marker
                    title={`${latitude},${longitude}`}
                    lat={latitude}
                    lng={longitude}
                />
            </GoogleMapReact>
        </div>
    );
};
