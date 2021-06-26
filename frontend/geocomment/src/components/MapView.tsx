import React from "react";
import { useUserContext } from "../contexts/UserContext";

function MapView() {
  const { userCredentials, setUserCredentials } = useUserContext();

  return (
    <div>
      <h1>MapView</h1>
      <h3>email: {userCredentials.email}</h3>
      <h3>token: {userCredentials.token}</h3>
    </div>
  );
}

export default MapView;
