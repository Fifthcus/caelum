import { useState, createContext, JSX } from "react";

interface GlobalVariablesContextObject {
    locale: LocaleObject | undefined
    weather: any,
    setWeather: any,
    GeocodeLocationName: (name: string) => Promise<GeocodeLocationObject[]>,
    FetchWeatherData: ({ lat, lon, name, state }: FetchWeatherDataObject) => void;
}

interface GeocodeLocationObject {
    country: string,
    lat: number,
    local_names: { [key: string]: string },
    lon: number,
    name: string,
    state: string
}

interface FetchWeatherDataObject {
    lat: number,
    lon: number,
    name: string,
    state: string
}

interface LocaleObject {
    city: string,
    state: string
}

interface GlobalVariablesContextProps {
    children: JSX.Element
}

export const GlobalVariables = createContext<GlobalVariablesContextObject | undefined>(undefined);

export const GlobalVariablesProvider = (props: GlobalVariablesContextProps) => {

    const [ weather, setWeather ] = useState<any | undefined>(undefined);
    const [ locale, setLocale ] = useState<LocaleObject | undefined>(undefined);

    const GeocodeLocationName = async (name: string): Promise<GeocodeLocationObject[]> => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${ import.meta.env.VITE_API_KEY }`
        const response = await fetch(url);
        const json: GeocodeLocationObject[] = await response.json();
        return json;
    }

    const FetchWeatherData = async ({ lat, lon, name, state}: FetchWeatherDataObject ) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${ import.meta.env.VITE_API_KEY }`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setLocale({ city: name, state });
        return json;
    }

    return(
        <GlobalVariables.Provider value={ { locale, weather, setWeather, GeocodeLocationName, FetchWeatherData } }>
            { props.children }
        </GlobalVariables.Provider>
    );
}