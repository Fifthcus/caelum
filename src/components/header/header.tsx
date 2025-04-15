import { useState, FormEvent } from "react";
import { useGlobalData } from "../../hooks/useGlobalData";
import SearchIcon from "../icons/Search";

const Header = () => {

    const {setWeather, GeocodeLocationName, FetchWeatherData } = useGlobalData();

    const [ inputText, setInputText ] = useState("");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await GeocodeLocationName(inputText);
        console.log(response);
        const { lat, lon, name, state } = response[0];
        const weather = await FetchWeatherData({ lat, lon, name, state });
        setWeather(weather);
        setInputText("");
    }
    return(
        <header className="flex flex-col items-center gap-5 px-6 py-8">
            <div className="grow content-center">
                <h1 className="text-2xl font-medium">Caelum</h1>
            </div>
            <div className="grow content-center">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-1">
                    <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} placeholder="Enter location name" className="py-2 pl-2 text-neutral-900 border-2 border-r-1 rounded-lg md:rounded-none md:rounded-l-lg bg-neutral-50 border-neutral-300" />
                    <button className="flex justify-center w-full py-2 md:px-2 border-2 border-l-1 rounded-lg md:rounded-none md:rounded-r-lg bg-neutral-50 border-neutral-300">
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </header>
    )
}
export default Header;