import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item) {
            toast.error("input some item to add")
            return
        }
        addItem(item);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud - Starter</h4>
            <div className="form-control" >
                <input type="text" name="" id="" className="form-input" value={item} onChange={(e) => setItem(e.target.value)} />
                <button type="submit" className="btn">Add item</button>
            </div>

        </form>
    )
}
export default Form