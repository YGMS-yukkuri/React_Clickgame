import { useState } from 'react'
import './App.css'
import Mainbutton from './components/Mainbutton/Mainbutton'
import Infomation from './components/Infomation/Infomation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainbutton count={count} setCount={setCount} />
      <Infomation count={count} />
    </>
  )
}

export default App
