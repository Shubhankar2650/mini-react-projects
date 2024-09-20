import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import Navlinks from "./Navlinks";
const Navbar = () => {
    const { isSidebarOpen, handleSideBarOpen, setPageId } = useGlobalContext();
    const handleSubmenu = (e) => {
        console.log(e.target.classList.contains('navlink'))
        if (!e.target.classList.contains('nav-link')) {
            setPageId(null)
        }
    }
    return (
        <nav className="navbar" onMouseOver={handleSubmenu}>
            <div className="navbar-center">
                <h3 className="logo">strapi</h3>
                <FaBars className="icon" onClick={() => handleSideBarOpen()} />
                <Navlinks />
            </div>

        </nav>
    )
}
export default Navbar