import React from 'react'

export default function UpgButton({ count, setCount, upgrade }) {
    const handleClick = () => {
        console.log(`Clicked on ${upgrade.name}`);
        if (upgrade.cost <= count) {
            setCount(count - upgrade.cost);
            alert(`${upgrade.name} purchased!`);
        }
    }
    return (
        <button className="upgbutton" onClick={handleClick}>{upgrade.name}</button>
    )
}
