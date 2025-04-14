import { useGlobalData } from "./hooks/useGlobalData";

const App = () => {

  const { URL } = useGlobalData();

  return (
    <>
      <p className="text-4xl">Hello World</p>
    </>
  )
}

export default App;
