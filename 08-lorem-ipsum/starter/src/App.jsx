import { useState } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(text);

  const handleChange = (e) => {
    setCount(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    const temp = text.slice(0, amount);
    setData(temp);
  }
  return <section className="section-center">
    <h4>Lorem Ipsum Starter</h4>
    <form action="" onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="paragraph">Paragraphs: </label>
      <input type="number" name="count" id="paragraph" value={count} onChange={handleChange}
        min="0" max="8" step="1" />
      <button type="submit" className="btn">Show</button>
    </form>
    <div className="lorem-text">
      {
        data.map((curr, index) => {
          return <p key={index}>{curr}</p>
        })
      }
    </div>
  </section>;
};
export default App;
