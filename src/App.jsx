import { useState } from 'react'
import './App.css'
import Mainbutton from './components/Main/Mainbutton/Mainbutton'
import Infomation from './components/Main/Infomation/Infomation'
import UpgradeIndex from './UpgradeIndex';
import DisplayUpg from './components/UpgradeBox/DisplayUpg/DisplayUPG';


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
