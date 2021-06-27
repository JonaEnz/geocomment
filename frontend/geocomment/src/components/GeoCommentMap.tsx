import { Icon, latLng, map } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "../contexts/LocationContext";
import { LocationTracer } from "./LocationTracer";
import nav_icon from "../icons/navigation_black_24dp.svg";
import { Service, thread } from "../api";
import { Bubble } from "./Bubble";
import useWindowDimensions from "../hooks/WindowDimensions";
import { Link } from "react-router-dom";

export function GeoCommentMap() {
  const { height, width } = useWindowDimensions();

  const [threads, setThreads] = React.useState<thread[]>([]);
  const { location, setLocation } = useLocation();

  const navigation_icon = new Icon({
    iconUrl: nav_icon,
    iconRetinaUrl: nav_icon,
    iconAnchor: [30, 30],
    popupAnchor: [30, 0],
    iconSize: [60, 60],
  });

  React.useEffect(() => {
    //fetch nearby threads
    Service.getThreadsAt(location.lat, location.lng, 500).then((newThreads) =>
      setThreads(newThreads)
    );
  }, [location]);

  //start dummy code
  React.useEffect(() => {
    if (threads.length == 0 || Math.abs(threads[0].location.lat - location.lat) >= 0.002) {
      let NUM_DUMMY_THREADS = 10;
      let dummy_threads: thread[] = new Array<thread>(NUM_DUMMY_THREADS);
      for (let i = 0; i < NUM_DUMMY_THREADS; i++) {
        let t: thread = {
          id: i,
          title: "Dummy Thread No." + i,
          description: "Dummy Description",
          location: {
            lat: (Math.random() - 0.5) * 0.002 + location.lat,
            lng: (Math.random() - 0.5) * 0.002 + location.lng,
          },
        };
        dummy_threads[i] = t;
      }
      setTimeout(() => {
        setThreads(dummy_threads);
      }, 1000);
    }
  }, [location]);
  //end dummy code

  return (
    <MapContainer
      center={location}
      zoom={18}
      scrollWheelZoom={false}
      style={{ height: height - 56 - 48 }} //TODO remove hardcoding
      zoomControl={false}
      dragging={false}
    >
      <LocationTracer />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {threads.map((thread) => (
        <Bubble thread={thread}></Bubble>
      ))}
      <Marker position={location} icon={navigation_icon} />
    </MapContainer>
  );
}
