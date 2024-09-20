import { useGlobalContext } from "./Context";
import sublinks from "./data"
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const { isSidebarOpen, handleSideBarOpen } = useGlobalContext();
    return (
        <aside className={isSidebarOpen ? "sidebar sidebar-open" : "sidebar "}>
            <div className="sidebar-container">

                <button onClick={() => handleSideBarOpen()} className="sidebar-btn">
                    <FaTimes className="sidebar-icon " />
                </button>


                {
                    sublinks.map((curr) => {
                        const { pageId, page, links } = curr;
                        return <div className="sidebar-link" key={pageId}>
                            <h4>{page}</h4>
                            <div className="sidebar-page-links">
                                {links.map((link) => {
                                    const { id, label, icon, url } = link;
                                    return <div className="sidebar-sublink" key={id}>
                                        <a href={url}>{icon} {label}</a>
                                    </div>
                                })}
                            </div>
                        </div>

                    })
                }
            </div>
        </aside>
    )
}
export default Sidebar