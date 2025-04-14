import { createContext, JSX } from "react";

interface GlobalVariablesContextObject {
    GeocodeLocationName: (name: string) => Promise<GeocodeLocationObject[]>,
    FetchWeatherData: (lat: number, lon: number) => void;
}

interface GeocodeLocationObject {
    country: string,
    lat: number,
    local_names: { [key: string]: string },
    lon: number,
    name: string,
    state: string
}

interface GlobalVariablesContextProps {
    children: JSX.Element
}

export const GlobalVariables = createContext<GlobalVariablesContextObject | undefined>(undefined);

export const GlobalVariablesProvider = (props: GlobalVariablesContextProps) => {

    const GeocodeLocationName = async (name: string): Promise<GeocodeLocationObject[]> => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${ import.meta.env.VITE_API_KEY }`
        const response = await fetch(url);
        const json: GeocodeLocationObject[] = await response.json();
        return json;
    }

    const FetchWeatherData = async (lat: number, lon: number) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ import.meta.env.VITE_API_KEY }`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return json;
    }

    return(
        <GlobalVariables.Provider value={ { GeocodeLocationName, FetchWeatherData } }>
            { props.children }
        </GlobalVariables.Provider>
    );
}