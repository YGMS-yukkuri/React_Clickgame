import { useEffect } from 'react';
import styles from './Infomation.module.css'

export default function Infomation({ count, setCount, UpgradeIndex, second, fillCount, setFillCount }) {
  let autocounter = 0;
  UpgradeIndex.forEach(upg => {
    autocounter += upg.cps * upg.amount;
  });

  useEffect(() => {
    setCount(count + autocounter);
    setFillCount(fillCount + autocounter);
  }, [second]);

  return (
    <>
      <div className={styles.infomation}>
        <a>Point: {count}</a>
        <a>auto: {autocounter}/s</a>
      </div>
    </>
  )
}