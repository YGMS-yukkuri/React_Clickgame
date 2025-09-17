import styles from './Mainbutton.module.css'

function Mainbutton({ count, setCount, UpgradeIndex, fillCount, setFillCount }) {
  let clickUpAmount = 0;
  UpgradeIndex.forEach(upg => {
    clickUpAmount += upg.clickup * upg.amount;
  });

  

  return (
    <button className={styles.mainButton} onClick={() => {
      setCount(count + 1 + clickUpAmount)
      setFillCount(fillCount + 1 + clickUpAmount)
    }}>
      クリック！！
    </button>
  )

}

export default Mainbutton
