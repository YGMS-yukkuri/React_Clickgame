import React, { useEffect } from 'react'
import Upgrade from '../Upgrade/Upgrade'

export default function DisplayUpg({ count, setCount, UpgradeIndex, setUpgrade }) {
    useEffect(() => {
        UpgradeIndex.forEach(upg => {
            if (count >= upg.DisplayCount) {
                upg.displayed = true;
            }
        });
    }, [count, UpgradeIndex]);

    
    return (
        <>
            {UpgradeIndex.filter(upg => count >= upg.DisplayCount || upg.displayed).map((upgrade) => (
                <Upgrade
                    upgrade={upgrade}
                    setUpgrade={setUpgrade}
                    count={count}
                    setCount={setCount}
                    key={upgrade.id}
                />
            ))}
        </>
    );
}
