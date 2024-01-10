import styles from "./header.module.css";
import Logo from "../../assets/logo-top.svg";
import Icon from "../../assets/menu-togle.svg";


const Header = () => {

  return (
    <header id={styles.menu} className={styles.header}>
      <div className={styles.menu_wrapper}>
        <div className={styles.content}>
          <div>
            <a href="#">
              <img src={Logo} alt="logo menu" />
            </a>
          </div>
          <div className={styles.wrap_mobile}>
            <button className={styles.button_mobile}> 
              <img id={styles.icon} src={Icon} alt="icon Menu"/>
            </button>
            <nav id="nav" className={styles.nav_menu}>
              <ul className={styles.ul_menu}>
                <li><a className={styles.nav_a} href="">inicio</a></li>
                <li><a className={styles.nav_a} href="">carros</a></li>
                <li><a className={styles.nav_a} href="">manuntenção</a></li>
                <li><a className={styles.nav_a} href="">Novos</a></li>
                <li>
                  <a className={styles.buy_btn} href="#">Comprar</a>
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