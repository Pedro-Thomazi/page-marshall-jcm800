import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <input className={styles.input} type="checkbox" name="" id="toggle" />
        <div className={styles.navLinks}>
            <ul>
                <li>
                    <a href="/">Guitarras</a>
                </li>
                <li>
                    <a href="/">Baterias</a>
                </li>
                <li>
                    <a href="/">Teclas</a>
                </li>
                <li>
                    <a href="/">Sopros</a>
                </li>
                <li>
                    <a href="/">Clássicos</a>
                </li>
                <li>
                    <a href="/">Tradicionais</a>
                </li>
                <li>
                    <a href="/">Acessórios</a>
                </li>
                <li className={styles.login}>
                    <a href="/">
                        <i className="bi bi-person-fill"></i>
                        <p>Login</p>
                    </a>
                </li>
                <li className={styles.buy}>
                    <a href="/">
                        <i className="bi bi-cart4"></i>
                        <p>Carrinho</p>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar