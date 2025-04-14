import { useGlobalData } from "./hooks/useGlobalData";

import Header from "./components/header/header";

const App = () => {

  const { URL } = useGlobalData();

  return (
    <>
      <Header/>
    </>
  )
}

export default App;
