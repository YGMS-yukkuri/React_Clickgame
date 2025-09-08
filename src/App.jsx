import { useState } from 'react'
import './App.css'
import Mainbutton from './component/Mainbutton/Mainbutton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainbutton count={count} setCount={setCount} />
    </>
  )
}

export default App
