import "./input.css"


function InputB(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = 'usd',
        amountDisable = false,
        currencyDisable = false,
        className = "",
    }
) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2 bg-amber-100 rounded-l-2xl p-2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                    
                </label>
                <input
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e) =>  onAmountChange && onAmountChange(Number(e.target.value)) }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right bg-amber-200 rounded-r-2xl p-2">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) =>  onCurrencyChange && onCurrencyChange(e.target.value) 
                    }
                    disabled={currencyDisable}

                >

                    {
                        currencyOptions.map((Currency)=>(
                            <option key={Currency} value={Currency}>
                                {Currency}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    )
}

export default InputB;