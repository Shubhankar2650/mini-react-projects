import SingleItem from "./SingleItem"


const Items = ({ items, deleteItem, updateList }) => {
    return (
        <div className="items">
            {
                items.map((item) => {
                    return <SingleItem key={item.id} item={item} deleteItem={deleteItem} updateList={updateList} />
                })
            }
        </div>
    )
}
export default Items