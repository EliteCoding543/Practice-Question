import React from 'react'
import { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const amountInputId = useId()
  return (
    <div className={`bg-white max-w-1/2 border p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-3 inline-block'>
            {label}
        </label>
        <input
            id={amountInputId}
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount' 
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            type="number" 
        />
      </div>

      {/* Currenvcy Type  */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="w-full mb-3 text-black/40">
            Currency Type
        </p>
        <select 
            className='rounded-lg px-1 py-1 bg-gray-100 outline-none cursor-pointer'
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
        >
            {
                currencyOptions.map((cur) => (
                    <option key={cur} value={cur}>usd</option>
                ))
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox
