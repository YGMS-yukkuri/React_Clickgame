import React from 'react'

export default function UpgButton({ count, setCount, upgrade, setUpgrade }) {
    const handleClick = () => {
        if (upgrade.cost <= count) {
            setCount(count - upgrade.cost);

            setUpgrade(prevUpgrade => {
                return prevUpgrade.map(upg => {
                    if (upg.id === upgrade.id) {
                        return { ...upg, amount: upg.amount + 1, cost: Math.floor(upg.cost * upg.costupper) }
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
