import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css'
import LocationIcon from './LocationIcon';
//--------------------
export default function MyMap() {
    const center = [25.04795444238345, 121.51693473083246]; // 台北車站
    const zoom = 16; // 放大比例
    return (
        <MapContainer center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={center} icon={LocationIcon} />
        </MapContainer >
    )
}