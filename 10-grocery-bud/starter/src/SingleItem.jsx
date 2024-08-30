import { useState } from "react"

const SingleItem = ({ item, deleteItem, updateList }) => {
    const { id, name, completed } = item;
    return (
        <div className="single-item">
            <input type="checkbox" name="" id="" onClick={() => updateList(id)} />
            <p className={completed ? "line" : ""}>{name}</p>
            <button type="button" className="btn remove-btn" onClick={() => deleteItem(id)}>Remove</button>
        </div>
    )
}
export default SingleItem