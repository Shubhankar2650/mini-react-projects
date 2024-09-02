import { FaBars } from "react-icons/fa";
import { useAppContext } from "./Context";

const Home = () => {
    const { handleSlideBar, handleModal } = useAppContext()
    return (
        <main>
            <button type="button" className="toggle-slideBar" onClick={handleSlideBar}><FaBars /></button>
            <button type="button" className="btn" onClick={handleModal}>SHow Module</button>
        </main>
    )
}
export default Home