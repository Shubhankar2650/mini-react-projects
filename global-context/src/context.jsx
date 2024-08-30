import { createContext, useContext, useState } from "react";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
    const [user, setUser] = useState("Shubhankar");
    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default AppContext;