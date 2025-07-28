import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <>
      <button onClick={handleClick}>Show animal list here</button>
    </>
  )
}

export default App
 