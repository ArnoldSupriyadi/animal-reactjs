import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount (count + 1);
  }

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
 