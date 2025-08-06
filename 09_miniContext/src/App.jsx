import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>Seekh rha h launde !!!!</h1>
      <h2>Jldi seekh le bsdk </h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
