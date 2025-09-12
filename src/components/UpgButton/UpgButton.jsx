import React from 'react'

export default function UpgButton({ count, setCount, upgrade, setUpgrade }) {
    const handleClick = () => {
        console.log(`Clicked on ${upgrade.name}`);
        if (upgrade.cost <= count) {
            setCount(count - upgrade.cost);
            setUpgrade(prevUpgrade => {
                return prevUpgrade.map(upg => {
                    if (upg.id === upgrade.id) {
                        return { ...upg, amount: upg.amount + 1 };
                    }
                    return upg;
                });
            });
        }
    }
    return (
        <button className="upgbutton" onClick={handleClick}>{upgrade.name}<br />({upgrade.amount})</button>
    )
}
