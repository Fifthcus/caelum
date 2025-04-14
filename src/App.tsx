import { useGlobalData } from "./hooks/useGlobalData";
import Header from "./components/header/header";

const App = () => {

  const { FETCH_WEATHER_URL } = useGlobalData();

  return (
    <>
      <Header/>
    </>
  )
}

export default App;
