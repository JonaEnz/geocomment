import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { location } from "../api/models/location";

function MapView() {
  const LOCATION_UPDATE_INTERVAL = 5000;

  const { userCredentials, setUserCredentials } = useUserContext();
  const [location, setLocation] = React.useState<location>();

  function updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  React.useEffect(() => {
    setInterval(updateLocation, LOCATION_UPDATE_INTERVAL);
  }, []);

  return (
    <div>
      <p>Latitude: {location?.lat}</p>
      <p>Longitude: {location?.lng}</p>
    </div>
  );
}

export default MapView;
