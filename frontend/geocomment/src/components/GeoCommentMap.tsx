import { Icon, latLng, map } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useLocation } from "../contexts/LocationContext";
import { LocationTracer } from "./LocationTracer";
import nav_icon from '../icons/navigation_black_24dp.svg'
import { Service, thread } from "../api";
import { Bubble } from "./Bubble";
import useWindowDimensions from "../hooks/WindowDimensions";
import { Link } from "react-router-dom";

export function GeoCommentMap() {
  const { height, width } = useWindowDimensions();

  const [threads, setThreads] = React.useState<thread[]>([])
  const {location, setLocation} = useLocation()

  const navigation_icon = new Icon({
    iconUrl: nav_icon,
    iconRetinaUrl: nav_icon,
    iconAnchor: [30, 30],
    popupAnchor: [30, 0],
    iconSize: [60, 60],
  })

  React.useEffect(() => {
    //fetch nearby threads
    Service.getThreadsAt(location.lat, location.lng, 500)
    .then((newThreads) => setThreads(newThreads))
  }, [location]);
  
  //start dummy code
  const thread1: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.004172, lng: 8.421980}
  }

  const thread2: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.008172, lng: 8.423980}
  }

  const thread3: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.009172, lng: 8.425980}
  }

  const thread4: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.008372, lng: 8.423380}
  }

  const thread5: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.008072, lng: 8.423080}
  }

  const thread6: thread = {
    id: 42,
    title: "Test Title",
    description: "Test Description",
    location: {lat: 49.008372, lng: 8.423080}
  }

  const threadArray = [thread1, thread2, thread3, thread4, thread5, thread6]
  setTimeout(() => {
    setThreads(threadArray)
  }, 5000)
  //end dummy code



  return (
    <MapContainer
        center={location}
        zoom={18}
        scrollWheelZoom={false}
        style={{height: height -56 -48}} //TODO remove hardcoding
        zoomControl={false}
        dragging={false}
        >
      <LocationTracer />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {threads.map((thread) => <Bubble thread={thread}></Bubble>)}
      <Marker position={location} icon={navigation_icon}/>
    </MapContainer>
  );
}
