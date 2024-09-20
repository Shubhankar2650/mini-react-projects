import { useGlobalContext } from "./Context"
import sublinks from "./data"

const Submenu = () => {
    const { pageId } = useGlobalContext();
    const component = sublinks.find((items) => items.pageId === pageId)

    return (
        <div className={component ? 'submenu submenu-show' : 'submenu'}>
            <h4> {component?.page}</h4>
            <div className="submenu-sublinks" style={{ gridTemplateColumns: component?.links?.length > 2 ? "1fr 1fr" : "1fr" }}>
                {
                    component?.links?.map((link) => {
                        const { id, label, icon, url } = link;
                        return <a href={url} key={id}>{icon} {label}</a>
                    })

                }
            </div>
        </div >
    )
}
export default Submenu