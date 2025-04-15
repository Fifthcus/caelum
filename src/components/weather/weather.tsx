import { useGlobalData } from "../../hooks/useGlobalData";

const Weather = () => {
    const { locale, weather } = useGlobalData();

    if(locale && weather){
        return(
            <section className="flex flex-col grow">
                <div className="grow justify-items-center content-center">
                    <h2 className="text-4xl">{ locale.city }</h2>
                    <h3 className="text-2xl">{ locale.state }</h3>

                    <div className="text-center py-8">
                        <p>{ weather.weather[0].main }</p>
                        <p>{ weather.weather[0].description }</p>
                    </div>

                    <div className="flex flex-col text-center">
                        <div>
                            <h5 className="text-xl">{ Math.round(weather.main.temp) }</h5>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-xl">L: { Math.round(weather.main.temp_min) }</p>
                            <p className="text-xl">H: { Math.round(weather.main.temp_max) }</p>
                        </div>
                    </div>
                </div>
                <div className="grow">

                </div>
            </section>
        );
    } else {
        return(
            <section className="flex flex-col grow ">
                <div className="grow justify-items-center content-center">
                    <p>Test</p>
                </div>
                <div className="grow">

                </div>
            </section>
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