import styles from './Infomation.module.css'

export default function Infomation({ count }) {
  return (
    <>
        <div className={styles.infomation}>
            <p>Now: {count}</p>
        </div>
    </>
  )
}
