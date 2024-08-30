import SingleColor from "./SingleColor";
import { nanoid } from "nanoid"

const ColorList = ({ colors }) => {
    return (
        <div className="colors">
            {
                colors.map((color, index) => {
                    return <SingleColor key={nanoid()} index={index} color={color} />
                })
            }
        </div>
    )
}
export default ColorList