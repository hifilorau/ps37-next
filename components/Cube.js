import styles from '../styles/Home.module.css'

const Cube = () => {
  return (
    <div className={styles.cube}>
    <div className={`${styles.face} ${styles.one}`}>LEARN MORE</div>
    <div className={`${styles.face} ${styles.two}`}>DONATE</div>
    <div className={`${styles.face} ${styles.three}`}>Act Fast</div>
    <div className={`${styles.face} ${styles.four}`}>1-900-373-7373</div>
    <div className={`${styles.face} ${styles.five}`}>HELP!!!</div>
    <div className={`${styles.face} ${styles.six}`}>CLICK THIS MF!</div>
    <div className={styles.keyhole}><img src="/images/key_door.png"/></div>
</div>
  )
}

export default Cube