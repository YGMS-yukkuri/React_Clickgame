import React from 'react'
import styles from './Upgrade.module.css'

export default function Upgrade() {
    return (
        <div className={styles.upgrademenu}>
            <div className={styles.upgradebutton}>
                <button>アップグレード</button>
            </div>
            <div className={styles.description}>
                <p>アップグレードの説明</p>
            </div>
            <div className={styles.cost}>
                <p>コスト: 1ポイント</p>
            </div>
        </div>
    )
}
