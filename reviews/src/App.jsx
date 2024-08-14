import { useState } from 'react'
import data from './data.js'
import './App.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";


function App() {
  const [index, setIndex] = useState(0)
  const person = data[index];
  console.log(person);

  const { id, name, job, image, text } = person;
  console.log(id);

  const changeLeft = () => {
    setIndex(() => {
      const currIndex = index - 1;
      return (currIndex + data.length) % data.length;
    })
  }
  const changeRight = () => {
    setIndex(() => {
      const currIndex = index + 1;
      return currIndex % data.length;
    })
  }

  const changeRandom = () => {
    let random = Math.floor(Math.random() * data.length)
    if (random === index) {
      random = index + 1;
    }
    setIndex(() => {
      return random % data.length;
    });
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon '>
            <FaQuoteRight />
          </span>
        </div>

        <h4>{name}</h4>
        <h5 className='job'>{job}</h5>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type="button" onClick={changeLeft} className='prev-btn'><FaChevronLeft /></button>
          <button type="button" onClick={changeRight} className='next-btn'><FaChevronRight /></button>
        </div>
        <button type="button" onClick={changeRandom} className='btn'>refresh </button>
      </article>

    </main>
  )
}

export default App
