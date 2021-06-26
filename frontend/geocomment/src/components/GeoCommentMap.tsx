import { Icon, latLng } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useLocation } from "../contexts/LocationContext";
import { setSourceMapRange } from "typescript";
import { location } from "../api";
import { LocationTracer } from "./LocationTracer";

import nav_icon from '../icons/navigation_black_24dp.svg'

export function GeoCommentMap() {
  const {location, setLocation} = useLocation()
  const navigation_icon = new Icon({
    iconUrl: nav_icon,
    iconRetinaUrl: nav_icon,
    iconAnchor: [30, 30],
    popupAnchor: [30, 0],
    iconSize: [60, 60],
  })
  return (
    <MapContainer
        center={location}
        zoom={18}
        scrollWheelZoom={false}
        style={{height: 600}}
        zoomControl={false}
        dragging={false}
        >
      <LocationTracer />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={navigation_icon}/>
    </MapContainer>
  );
}
