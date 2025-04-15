import { useGlobalData } from "../../hooks/useGlobalData";

const Weather = () => {
    const { locale, weather } = useGlobalData();

    if(locale && weather){
        return(
            <section className="flex w-full">
                <h2>{ locale.city }</h2>
                <h3>{ locale.state }</h3>

                <p>{ weather.weather[0].main }</p>
                <p>{ weather.weather[0].description }</p>

                <h5>{ weather.main.temp }</h5>
                <p>{ weather.main.temp_min }</p>
                <p>{ weather.main.temp_max }</p>
            </section>
        );
    } else {
        return(
            <p>Test</p>
        );
    }

}
export default Weather;

/*


return(
        <>
            <section className="flex w-full">
            { weather ? (
                <>
                    <h2>{ locale.city }</h2>
                    <h3>{ locale.state }</h3>

                    <p>{ weather.weather[0].main }</p>
                    <p>{ weather.weather[0].description }</p>

                    <h5>{ weather.main.temp }</h5>
                    <p>{ weather.main.temp_min }</p>
                    <p>{ weather.main.temp_max }</p>
                </>
            ) : (
                <p>Wondering what's the weather?</p>
            ) }
            </section>
        </>
    );


*/