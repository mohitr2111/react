import { useState } from 'react'
import React from 'react'
import InputB from './components/input.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function App() {

  const [amount_f, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount_f);
    setAmount(convertedAmount);
  }

  const convertButton = ()=>{
    setConvertedAmount(amount_f * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertButton();
            }}
          >
            <div className="w-full mb-1">
              <InputB
                label="From"
                amount={amount_f}
                currencyOptions={options}
                onCurrencyChange={(c)=>setFrom(c)}
                onAmountChange={(a)=>setAmount(a)}
                selectCurrency={from}               

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 "

                onClick={()=> {
                  swap();
                }}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputB
                label="To"
                // label="From"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(c)=>setTo(c)}
                // onAmountChange={(a)=>setAmount(a)}
                selectCurrency={to}     
                amountDisable


              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white text-2xl px-4 py-3 rounded-lg"
            
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
