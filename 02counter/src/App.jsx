import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCouter] = useState(0)

  const addValue = () => {
    if(counter == 20){
      setCouter(counter)
    }else{
    setCouter(counter + 1) 
    }
  }
  const removeValue = () => {
    if(counter == 0){
      setCouter(counter)
    }else{
    setCouter(counter - 1)
    }
  }
  return (
    <>
   <h1>Basic React app</h1>
   <h2>Counter Value: {counter}</h2>

   <button onClick={addValue}>add Value</button>
   <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
