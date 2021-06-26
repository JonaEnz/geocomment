import { createContext, useContext } from "react";
import { location } from "../api";

export type LocationContextType = {
  location: location;
  setLocation: (location: location) => void;
};

export const LocationContext = createContext<LocationContextType>({
  location: {lat: 0, lng: 0},
  setLocation: (location: location) => console.warn("no context provider"),
});

export const useLocation = () => useContext(LocationContext);
