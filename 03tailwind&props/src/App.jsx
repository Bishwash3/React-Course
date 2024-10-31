import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.component.jsx'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-3 rounded-xl'>Tailwind Test</h1>
     <Card buttonTxt = "Buy"/>

    </>
  )
}

export default App
