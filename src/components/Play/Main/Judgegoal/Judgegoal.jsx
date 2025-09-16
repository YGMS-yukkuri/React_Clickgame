import React, { useEffect } from 'react'
import styles from './Judgegoal.module.css'

export default function Judgegoal({ goal, count }) {

  useEffect(() => {
    console.log(`Goal: ${goal}, Current Score: ${count}`);
  }, [goal, count]);

  return (
    <div className={styles.Goal}>
      <div className={styles.goalbar}>
        <div className={styles.goalbarFill} style={{ height: `${(count / goal) * 100}%` }}></div>
      </div>
      <div className={styles.textbox}>
        <a>クリア条件: {goal}以上</a>
        <a>現在のスコア: {count}</a>
      </div>
    </div>
  )
}
