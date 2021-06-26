import { useMap } from "react-leaflet"
import React from "react"
import { useLocation } from "../contexts/LocationContext"

export function LocationTracer() {
    const map = useMap()
    const {location, setLocation} = useLocation()
    React.useEffect(() => {
        map.flyTo(location, 18);
    }, [location]) //whenever the location changes, recenter the map at that location
    return(<div/>);
}