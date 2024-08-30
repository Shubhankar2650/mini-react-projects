import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
    const { hex, weight } = color;
    const handleClick = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success("color is copied to the clipboard")
            } catch (error) {
                toast.error("unable to copy the color to the clipboard")
            }
        } else {
            toast.error("clipboard is not working ")
        }
    }
    return (
        <article className={index < 10 ? "color" : "color color-light"}
            style={{ backgroundColor: `#${hex}` }}
            onClick={handleClick}
        >
            <p className="percent-value">{`${weight}%`}</p>
            <p className="color-value " >{`#${hex}`}</p>
        </article>
    )
}
export default SingleColor