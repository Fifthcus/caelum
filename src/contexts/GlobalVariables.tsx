import { createContext, JSX } from "react";

interface GlobalVariablesContextObject {
    FETCH_WEATHER_URL: string,
    FETCH_GEOLOCATION_URL: string,
    GeocodeLocationName: (name: string) => {}
}

interface GlobalVariablesContextProps {
    children: JSX.Element
}

export const GlobalVariables = createContext<GlobalVariablesContextObject | undefined>(undefined);

export const GlobalVariablesProvider = (props: GlobalVariablesContextProps) => {
    const LAT = 1;
    const LON = 1;
    const CITY_NAME = "New York";
    const FETCH_GEOLOCATION_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=1&appid=${ import.meta.env.VITE_API_KEY }`;
    const FETCH_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${ import.meta.env.VITE_API_KEY }`;

    const GeocodeLocationName = async (name: string) => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=1&appid=${ import.meta.env.VITE_API_KEY }`
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    return(
        <GlobalVariables.Provider value={{ FETCH_WEATHER_URL, FETCH_GEOLOCATION_URL, GeocodeLocationName }}>
            { props.children }
        </GlobalVariables.Provider>
    );
}