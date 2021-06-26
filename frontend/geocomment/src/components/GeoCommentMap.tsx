import { Icon, latLng } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useLocation } from "../contexts/LocationContext";
import { LocationTracer } from "./LocationTracer";
import nav_icon from '../icons/navigation_black_24dp.svg'
import { thread } from "../api";
import { Bubble } from "./Bubble";

export function GeoCommentMap() {
  const {location, setLocation} = useLocation()
  const navigation_icon = new Icon({
    iconUrl: nav_icon,
    iconRetinaUrl: nav_icon,
    iconAnchor: [30, 30],
    popupAnchor: [30, 0],
    iconSize: [60, 60],
  })
  
  //start dummy code
  const thread: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.008172, lng: 8.423980}
  }
  //end dummy code


  return (
    <MapContainer
        center={location}
        zoom={18}
        scrollWheelZoom={false}
        style={{height: 2000}}
        zoomControl={false}
        dragging={false}
        >
      <LocationTracer />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Bubble thread={thread}/>
      <Marker position={location} icon={navigation_icon}/>
    </MapContainer>
  );
}
