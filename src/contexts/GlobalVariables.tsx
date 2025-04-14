import { createContext, JSX } from "react";

interface GlobalVariablesContextObject {
    URL: string
}

interface GlobalVariablesContextProps {
    children: JSX.Element
}

export const GlobalVariables = createContext<GlobalVariablesContextObject | undefined>(undefined);

export const GlobalVariablesProvider = (props: GlobalVariablesContextProps) => {
    const LAT = 1;
    const LON = 1;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${ import.meta.env.VITE_API_KEY }`
    return(
        <GlobalVariables.Provider value={{ URL }}>
            { props.children }
        </GlobalVariables.Provider>
    );
}