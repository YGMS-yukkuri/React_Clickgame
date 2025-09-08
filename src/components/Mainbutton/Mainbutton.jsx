import { useState } from 'react'
import styles from './Mainbutton.module.css'

function Mainbutton({ count, setCount }) {
  return (
    <button className={styles.mainButton} onClick={() => setCount(count + 1)}>
      クリック！！
    </button>
  )
}

export default Mainbutton
