import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu_wrapper}>
        <div className={styles.content}>
          <div>
            <a href="#">
              <img src="/logo-top.svg" alt="logo menu" />
            </a>
          </div>
          <div className="wrap-mobile">
            <nav id="nav">
              <ul className={styles.ul_menu}>
                <li><a className={styles.nav_a} href="">inicio</a></li>
                <li><a className={styles.nav_a} href="">carros</a></li>
                <li><a className={styles.nav_a} href="">manuntenção</a></li>
                <li><a className={styles.nav_a} href="">Novos</a></li>
                <li>
                  <a className={styles.login_btn} href="#">Comprar</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;