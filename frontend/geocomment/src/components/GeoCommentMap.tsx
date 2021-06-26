import { latLng } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useLocation } from "../contexts/LocationContext";
import { setSourceMapRange } from "typescript";
import { location } from "../api";
import { LocationTracer } from "./LocationTracer";

export function GeoCommentMap() {
  const {location, setLocation} = useLocation()
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
    </MapContainer>
  );
}
