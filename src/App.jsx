import { useState } from 'react'
import './App.css'
import Mainbutton from './components/Mainbutton/Mainbutton'
import Infomation from './components/Infomation/Infomation'
import UpgradeIndex from './UpgradeIndex';
import DisplayUpg from './components/DisplayUpg/DisplayUpg';


function App() {
  const [count, setCount] = useState(0);
  const [upgrade, setUpgrade] = useState(UpgradeIndex);

  return (
    <main>
      <Mainbutton count={count} setCount={setCount} UpgradeIndex={upgrade} setUpgrade={setUpgrade} />
      <Infomation count={count} setCount={setCount} UpgradeIndex={upgrade} />
      <DisplayUpg count={count} setCount={setCount} UpgradeIndex={upgrade} setUpgrade={setUpgrade} />
    </main>
  )
}

export default App
