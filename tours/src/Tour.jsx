import { useState } from "react"

const Tour = ({ id, name, info, price, image, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="single-tour">
            <img src={image} alt="image" className="img" />
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{readMore ? info : `${info.substring(0, 200)}`}
                    <button type="button" className="info-btn" onClick={() => setReadMore(!readMore)}>{readMore ? "read less" : "read more..."}</button>
                </p>
                <button type="button" className="btn delete-btn btn-block" onClick={() => removeTour(id)}>Remove from list</button>
            </div>

        </div>
    )
}
export default Tour