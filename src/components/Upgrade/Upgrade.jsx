import React, { useEffect } from 'react'
import styles from './Upgrade.module.css'
import UpgButton from '../UpgButton/UpgButton'

export default function Upgrade( { upgrade, count, setCount } ) {
    return (
        <div className={styles.upgrademenu} style={{ gridRow: upgrade.id}} key={upgrade.id}>
            <div className={styles.upgradebutton}>
                <UpgButton upgrade={upgrade} count={count} setCount={setCount} />
            </div>
            <div className={styles.description}>
                <p>{upgrade.description}</p>
            </div>
            <div className={styles.cost}>
                <p>コスト: {upgrade.cost}ポイント</p>
            </div>
        </div>
    )
}
