import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { location } from "../api/models/location";
import { GeoCommentMap } from "./GeoCommentMap"
import { LocationContext } from "../contexts/LocationContext";

function MapView() {
  const LOCATION_UPDATE_INTERVAL = 5000;
  const FALLBACK_LOCATION = {lat: 49.011202, lng: 8.404114}

  const { userCredentials, setUserCredentials } = useUserContext();
  const [location, setLocation] = React.useState<location>(FALLBACK_LOCATION);


  function updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log("Update location to lat: " + location.lat + " lng: " + location.lng)
    });
  }

  React.useEffect(() => {
    setInterval(updateLocation, LOCATION_UPDATE_INTERVAL);
  }, []);

  return (
    <div>
      <LocationContext.Provider value={{location: location, setLocation: setLocation}}>
        <GeoCommentMap/>
      </LocationContext.Provider>
    </div>
  );
}

export default MapView;
