import * as React from 'react';
import './google-map-marker.css';

interface IProps {
    title: string;
    lat: number;
    lng: number;
}

const Marker = ({ title }: IProps) => (
    <div className="google-map-marker" title={title} />
);

export default Marker;
