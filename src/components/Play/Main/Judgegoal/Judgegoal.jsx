import React, { useEffect, useState } from 'react'
import styles from './Judgegoal.module.css'
import { Link } from 'react-router-dom';

export default function Judgegoal({ goal, count, fillCount, setFillCount }) {

  const [isCleared, setIsCleared] = useState(false);

  if (goal <= count || isCleared) {
    if (!isCleared) {
      setIsCleared(true);
    }
    return (
      <div className={styles.Goal}>
        <div className={styles.goalbar}>
          <div className={styles.goalbarFill} style={{ height: `${(count / goal) * 100}%` }}></div>
        </div>
        <div className={styles.textbox}>
          <a>クリア条件: {goal}以上:達成！</a>
          <Link to="/result" state={{ goal: goal, count: count, fillCount: fillCount }} className={styles.nextbutton}>
          <button>リザルト画面へ</button></Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.Goal}>
        <div className={styles.goalbar}>
          <div className={styles.goalbarFill} style={{ height: `${(count / goal) * 100}%` }}></div>
        </div>
        <div className={styles.textbox}>
          <a>クリア条件: {goal}以上</a>
        </div>
      </div>
    )
  }
}
