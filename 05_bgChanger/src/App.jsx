import { useState } from 'react'
import "./index.css"

let colors = ["red", "green", "pink", "blue", "black", "yellow"]
function App() {
  const [colour, setColour] = useState("grey")
  return (
    <>
      <div style={{ backgroundColor: colour, height: "100vh", width: "100vw" }}>

        <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 mx-2 px-2 py-1 rounded-xl bg-yellow' >
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 mx-1 rounded-4xl ' >test
     

            {
              colors.map((color) => {
                return(

                  <button 
                  className='outline-none px-4 py-1 rounded-full text-white font-bold hover:scale-105 transition-transform duration-200 shadow-lg' 
                  style={{ backgroundColor: color }} 
                  onClick={()=>{
                    setColour(color)
                  }}>
                  {color}
                </button>
                )
              })
            }

          </div>

        </div>
      </div>
    </>

  )
}

export default App
