import { useEffect, useState } from 'react'
import './App.css'
import Mainbutton from './components/Main/Mainbutton/Mainbutton'
import Infomation from './components/Main/Infomation/Infomation'
import UpgradeIndex from './UpgradeIndex';
import DisplayUpg from './components/UpgradeBox/DisplayUpg/DisplayUPG';


function App() {
  const [count, setCount] = useState(0);
  const [upgrade, setUpgrade] = useState(UpgradeIndex);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(prevSecond => prevSecond + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Mainbutton count={count} setCount={setCount} UpgradeIndex={upgrade} setUpgrade={setUpgrade} />
      <Infomation count={count} setCount={setCount} UpgradeIndex={upgrade} second={second} />
      <DisplayUpg count={count} setCount={setCount} UpgradeIndex={upgrade} setUpgrade={setUpgrade} />
    </main>
  )
}

export default App
