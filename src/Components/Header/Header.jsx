import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Muita <span>Melodia</span></h1>
      <div className={styles.loginAndBuy}>
        <i className="bi bi-cart4"></i>
        <i className="bi bi-person-fill"></i>
      </div>
      <div className={styles.navhamb}>
        <label htmlFor='toggle' className={styles.hamb}>
          <span className={styles.line_1}></span>
          <span className={styles.line_2}></span>
          <span className={styles.line_3}></span>
        </label>
      </div>
    </header>
  )
}

export default Header