import { useContext } from "react";
import { GlobalVariables } from "../contexts/GlobalVariables";

export const useGlobalData = () => {
    const globalDataContext = useContext(GlobalVariables);
    if(!globalDataContext) throw new Error("An error occured managing global variables.");
    return globalDataContext;
}