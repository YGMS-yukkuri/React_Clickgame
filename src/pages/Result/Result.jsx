import React, { useEffect } from 'react'
import UpgradeIndex from '../../UpgradeIndex';
import { Link, useLocation } from 'react-router-dom'
import styles from './Result.module.css'

export default function Result() {
  const location = useLocation();
  const { goal, count, fillCount } = location.state || { goal: 0, count: 0, fillCount: 0 };
  useEffect(() => {
          UpgradeIndex.forEach(upg => {
              upg.displayed = false;
          });
      }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>リザルト画面</h1>
        <p>クリア条件: {goal}以上</p>
        <p className={styles.score}>あなたが取得した累計ポイント: {fillCount}</p>
        <Link to="/" className={styles.button}><button>スタート画面へ戻る</button></Link>
      </div>
    </div>
  )
}
