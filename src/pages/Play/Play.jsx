import { useEffect, useState } from 'react'
import './Play.css'
import { Link, useLocation } from 'react-router-dom'
import Mainbutton from '../../components/Play/Main/Mainbutton/Mainbutton'
import Infomation from '../../components/Play/Main/Infomation/Infomation'
import UpgradeIndex from '../../UpgradeIndex';
import DisplayUpg from '../../components/Play/UpgradeBox/DisplayUpg/DisplayUpg';
import Judgegoal from '../../components/Play/Main/Judgegoal/Judgegoal'


function Play() {
    const location = useLocation();
    const goal = location.state.goal;

    const [count, setCount] = useState(0);
    const [fillCount, setFillCount] = useState(0);
    const [upgrade, setUpgrade] = useState(UpgradeIndex);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(prevSecond => prevSecond + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main>
                <Judgegoal goal={goal} count={count} fillCount={fillCount} setFillCount={setFillCount} />
                <Mainbutton count={count} setCount={setCount} UpgradeIndex={upgrade} setUpgrade={setUpgrade} fillCount={fillCount} setFillCount={setFillCount} />
                <Infomation count={count} setCount={setCount} UpgradeIndex={upgrade} second={second} fillCount={fillCount} setFillCount={setFillCount} />
                <DisplayUpg count={count} setCount={setCount} UpgradeIndex={upgrade} setUpgrade={setUpgrade} fillCount={fillCount} setFillCount={setFillCount} />
            </main>
        </>
    )
}

export default Play;
