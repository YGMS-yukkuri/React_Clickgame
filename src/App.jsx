import { useState } from 'react'
import './App.css'
import Mainbutton from './components/Mainbutton/Mainbutton'
import Infomation from './components/Infomation/Infomation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Mainbutton count={count} setCount={setCount} />
        <Infomation count={count} />
      </main>
    </>
  )
}

export default App
