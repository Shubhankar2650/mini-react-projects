import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const conn = await axios.get(url).then((response) => {
        setTours(response.data);
        setIsLoading(false);
      })
      // console.log(conn);

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  function removeTour(id) {
    console.log(id);
    const newtour = tours.filter((tour) => tour.id !== id);
    console.log(newtour);
    setTours(newtour);
  }


  return <main>
    {
      (tours.length === 0) ? <button type="button" className="btn" onClick={() => fetchData()}>Refresh</button>
        : <Tours tours={tours} removeTour={removeTour} />
    }
  </main>;
};
export default App;
