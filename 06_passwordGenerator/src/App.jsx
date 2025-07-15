import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [range, setRange] = useState(2)
  const [numA, setNumA] = useState(false)
  const [spChar, setSpChar] = useState(false)

  return (
    <>
      <div className='w-full max-w-md mx-auto px-4 my-8 shadow-md rounded-lg bg-gray-700 py-2'>
        <h1 className='text-white text-center my-3 text-4xl'>Password Generator</h1>
        < div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            style={{ backgroundColor: '#72a0de8f' }}>
          </input>
          <button className='px-1.5 text-black-200'
            style={{ backgroundColor: '#ffffffff' }}
            onClick={() => { }}>
            <b>COPY</b>
          </button>
        </div>
        {/* <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1'>
            <input type='range'
              min={2}
              max={25}
              value={range}
              className='cursor-pointer'>
              <label>{range}</label>
            </input>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default App
