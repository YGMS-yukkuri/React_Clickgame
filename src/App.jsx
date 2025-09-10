import { useState } from 'react'
import './App.css'
import Mainbutton from './components/Mainbutton/Mainbutton'
import Infomation from './components/Infomation/Infomation'
import DisplayUPG from './components/DisplayUPG/DisplayUPG';
import Upgrade from './UpgradeIndex';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Mainbutton count={count} setCount={setCount} />
      <Infomation count={count} />
      <DisplayUPG count={count} setCount={setCount} UpgradeIndex={Upgrade} />
    </main>
  )
}

export default App
