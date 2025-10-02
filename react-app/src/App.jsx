import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from './FunctionComponent'

function App() {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  const handleToggleChildClick = () => {
    setShowChild(!showChild);
  }

  return (
    <>
      <h1>Parent, but this is my child:</h1>
      <p><button onClick={handleToggleChildClick}>Toggle child existence</button></p>
      {showChild &&
        <FunctionComponent fruit="apple" callback={console.log}>
          <p>child paragraph</p>
        </FunctionComponent>
      }
    </>
  )
}

export default App
