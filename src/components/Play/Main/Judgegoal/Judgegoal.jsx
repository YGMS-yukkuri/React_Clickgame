import React, { useEffect } from 'react'
import styles from './Judgegoal.module.css'

export default function Judgegoal({ goal, count }) {

    useEffect(() => {
        console.log(`Goal: ${goal}, Current Score: ${count}`);
    }, [goal, count]);

  return (
    <div className={styles.Goal}>
        <div className={styles.goalbar}>
            <div className={styles.goalbarFill} style={{ width: `${(count / goal) * 100}%` }}></div>
        </div>
      <p>Judgegoal: {goal} Current Score: {count}</p>
    </div>
  )
}
