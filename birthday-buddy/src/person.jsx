const Person = (data, key) => {
    return (
        <div className="person">
            <img src={data.image} alt="" />
            <div>
                <h4 className="person">{data.name}</h4>
                <p>{data.age}</p>
            </div>
        </div>
    )
}
export default Person;