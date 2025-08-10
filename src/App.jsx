import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalShow from './AnimalShows.jsx'

function getRandomAnimal() {
    const animals = ['cat', 'dog', 'rabbit', 'hamster', 'turtle', 'snake', 'goldfish', 'rabbit', 'shark', 'monkey'];
    return animals[Math.floor(Math.random() * animals.length)];
  }

function App() {
  const [animals, setAnimals] = useState([]);
 
  const handleClick = () => {
    // ['cat']
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        {renderedAnimals}
      </div>
    </>
  )
}

export default App
 