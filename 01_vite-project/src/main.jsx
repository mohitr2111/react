import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'

// method 2
function MyApp()
{
  return(
    <>
    <div>
      <h1>Custom app</h1>
    </div>
    <App/>
    </>
  )
}

// ***WRONG METHOD***
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com/',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// METHOD 3
const otherElement = (
  <a href='https://www.google.com' target="main">Click to google</a>
)


// method 4 
const anotherElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target: 'blank'
  },
  'click will direct to google'

)

createRoot(document.getElementById('root')).render(
  
    <App />
    // <MyApp/>
    // otherElement
    // anotherElement
)
