import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext)

const AppProvider = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);

    const handleSideBarOpen = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen);
    }
    return (
        <AppContext.Provider value={{ isSidebarOpen, handleSideBarOpen, pageId, setPageId }}>
            {props.children}
        </AppContext.Provider >
    );
}

export default AppProvider;