import { use, useEffect } from 'react';
import styles from './Infomation.module.css'

export default function Infomation({ count, setCount, UpgradeIndex }) {
  let autocounter = 0;
  UpgradeIndex.forEach(upg => {
    autocounter += upg.cps * upg.amount;
  });
  
  useEffect(() => {
    setCount(count + autocounter);
},[])
  return (
    <>
      <div className={styles.infomation}>
        <a>Count: {count}</a>
        <a>auto: {autocounter}</a>
      </div>
    </>
  )
}
