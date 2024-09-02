import { createContext, useContext, useState } from "react"

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);


const AppProvider = (props) => {
    const [isSlideBarOpen, setIsSlideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSlideBar = () => {
        // console.log(isSlideBarOpen);
        return setIsSlideBarOpen(!isSlideBarOpen)
    };
    const handleModal = () => {
        // console.log(isModalOpen)
        return setIsModalOpen(!isModalOpen)
    };
    return (
        <AppContext.Provider value={{ isSlideBarOpen, isModalOpen, handleSlideBar, handleModal }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppProvider;