import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './Hooks/useCurrencey'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setConvertAmount] = useState(0)

  // Custome Hooks
  const currencyInfo = useCurrency(from)

  // All Key Is Obj
  const allKey = Object.keys(currencyInfo)
  // console.log(allKey)

  // Swap 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = () => {
    setConvertAmount(amount * currencyInfo([to]))
  }
  return (
    <div>
      <InputBox />
    </div>
  )
}

export default App
