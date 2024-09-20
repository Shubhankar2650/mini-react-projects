import { useGlobalContext } from "./Context";
import sublinks from "./data";


const Navlinks = () => {
    const { pageId, setPageId } = useGlobalContext();
    return (
        <div className="navlinks">
            {sublinks.map((list) => {
                const { pageId, page } = list;
                return <button type="button" className="nav-link" key={pageId} onMouseEnter={() => setPageId(pageId)}>
                    {page}
                </button>
            })}
        </div>
    )
}
export default Navlinks