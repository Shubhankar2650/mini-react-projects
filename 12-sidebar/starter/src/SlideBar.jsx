import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";

import logo from "./logo.svg"
import { useAppContext } from "./Context";

const SlideBar = () => {

    const { isSlideBarOpen, handleSlideBar } = useAppContext();

    return (
        <div className={isSlideBarOpen ? "slidebar slidebar-open" : "slidebar"}>
            <div className="slidebar-header">
                <img src={logo} alt="logo" />
                <button type="button" onClick={handleSlideBar} className="modal-contianer-btn"><FaTimes /></button>
            </div>
            <ul className="icon-links">

                {
                    links.map((curr) => {
                        const { id, url, text, icon } = curr
                        return <li key={id}><a href={url} >{icon}
                            <p>{text}</p> </a></li>
                    })
                }
            </ul>
            <ul className="social-links">
                {
                    social.map((curr) => {
                        const { id, url, icon } = curr
                        return <li key={id}><a href={url} >{icon}</a></li>
                    })
                }
            </ul>
        </div >
    )
}
export default SlideBar