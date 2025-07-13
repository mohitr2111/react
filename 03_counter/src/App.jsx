import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let c = 15
// OLD METHOD TO UPDATE UI
// const addVal = () => {
//   // console.log('value added',Math.random() )
//   c += 1;
//   const addBu = document.querySelector("h2")
//   addBu.innerHTML = "counter value " + c
// }

// const minusVal = () => {
//   // console.log('value added',Math.random() )
//   c -= 1;
//   const addBu = document.querySelector("h2")
//   addBu.innerHTML = "counter value " + c
// }


function App() {

  const [counter, setcounter] = useState(15)
  const addVal = () => {
    console.log('value added',counter+1 )
    // counter+=1;
    setcounter(counter+1 )
  }
  const minusVal = () => {
    console.log('value added',counter+1 )
    // counter+=1;
    setcounter(counter-1 )
  }
  return (
    <>
      <h1>ewwwwwwwwwww{counter}</h1>
      <h2>counter value {counter}</h2>
      <br/>
      <button onClick={addVal}>Add Value{counter}</button>
      <br/>
      <button onClick={minusVal}>Remove Value{counter}</button>
    </>
  )
}

export default App
