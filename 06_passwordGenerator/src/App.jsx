import {useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [Range, setRange] = useState(2)
  const [numA, setNumA] = useState(false)
  const [spChar, setSpChar] = useState(false)

  const passWordRef = useRef(null)

  const copyPassToClipBoard = useCallback(()=>{
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password)
  },[password])

  const generatePass = useCallback(()=>{
    let ans="";
    let Pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numA){
      Pass += "0123456789"
      Pass += "0123456789"
    }
    if(spChar){
      Pass += "`~!@#$%^&*()_{}|[]:?/.,<>"
    }

    let n = Pass.length;
    console.log(n);
    // console.log(index);
    
    for (let i = 0; i < Range; i++) {
      let index = Math.floor((Math.random()*n)+1);
      ans += Pass.charAt(index);
      
    }

    setPassword(ans);
  },[Range,numA,spChar, setPassword])
  
  // return generatePass();
  // generatePass();

  useEffect(()=>{
    generatePass();
  },[Range,spChar,numA,setPassword])

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
            style={{ backgroundColor: '#72a0de8f' }}
            ref={passWordRef}>
          </input>
          <button className='px-1.5 text-black-200'
            style={{ backgroundColor: '#ffffffff' }}
            onClick={copyPassToClipBoard}>
            <b>COPY</b>
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1 text-white'>
            <input type='range'
              min={2}
              max={25}
              value={Range}
              className='cursor-pointer'
              onChange={(e)=>{setRange(e.target.value)}}>
            </input>
              <label>{Range}</label>
          </div>


          <div className='flex items-centre gap-x-1'>
            <input type='checkbox'
              defaultChecked={numA}
              // value={numA}
              onChange={()=>{setNumA((prev)=>!prev)}}>
            </input>
              <label className='text-white'>Number</label>
          </div>


          <div className='flex items-centre gap-x-1'>
            <input type='checkbox'
              defaultChecked={spChar}
              // value={numA}
              onChange={()=>{setSpChar((prev)=>!prev)}}>
            </input>
              <label className='text-white'>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
