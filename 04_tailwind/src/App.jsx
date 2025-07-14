import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Card/>
      <Card/>
    </>
  )
}

export default App
