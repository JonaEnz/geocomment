import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { location } from "../api/models/location";
import { GeoCommentMap } from "./GeoCommentMap";
import { LocationContext } from "../contexts/LocationContext";
import WriteComment from "./Thread/WriteComment";

function MapView() {
  const LOCATION_UPDATE_INTERVAL = 3000;
  const FALLBACK_LOCATION = { lat: 49.011202, lng: 8.404114 };

  const { userCredentials, setUserCredentials } = useUserContext();
  const [location, setLocation] = React.useState<location>(FALLBACK_LOCATION);

  function updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log(
        "Update location to lat: " + location.lat + " lng: " + location.lng
      );
    });
  }

  React.useEffect(() => {
    setInterval(updateLocation, LOCATION_UPDATE_INTERVAL);
  }, []);

  return (
    <div>
      <LocationContext.Provider
        value={{ location: location, setLocation: setLocation }}
      >
        <GeoCommentMap />
        <WriteComment
          submit={(message: string, anonymous: boolean, file: object) => new Promise<boolean>((resolve, reject) => true)} //TODO replace by real api service
        ></WriteComment>
      </LocationContext.Provider>
    </div>
  );
}

export default MapView;
