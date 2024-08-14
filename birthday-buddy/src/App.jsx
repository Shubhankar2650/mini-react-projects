import { useState } from "react";
import data from "./data"
import Person from "./person";
const App = () => {
  const [list, setList] = useState(data);
  // console.log(data);
  const handleButtonClick = () => {
    setList([]);
    return
  }
  return <main>
    {/* <h3>Birthday Reminder - Starter</h3> */}
    <div className="container">
      <h3>{list.length} Birthday's Today</h3>
      {
        list.map((person) => {
          return <Person key={person.id} {...person} />
        })
      }
      <button type="button" className="btn btn-block" onClick={handleButtonClick}>clear</button>
    </div>

  </main>;
};
export default App;
