import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const handleClick = () => {
  //   setCount (count + 1);
  // }
  function makeArray(){
    return [1, 10, 32, 40]
  }

  const [firstElement, secondElement] = makeArray();
  console.log(firstElement, secondElement)

  return (
    <>
      <button onClick={handleClick}>Show animal list here</button>
      <div>
        <p>Number of animals : {count}</p>
      </div>
    </>
  )
}

export default App
 