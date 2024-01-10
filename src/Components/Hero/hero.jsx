import styles from "./hero.module.css";
import Button from "../Button/button";
import CarPreto from "../../assets/carro-preto.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div className={styles.container_hero}>
          <div className={styles.text_content}>
            <h2 className={styles.hero_title}>
              DBS <span className={styles.hero_span}>ULTIMATE 700</span>
            </h2>
            <p className={styles.hero_p}>
              Por mais de meio século, o nome DBS significou apenas uma coisa: a
              produção definitiva do Aston Martin.
            </p>
          </div>
          <div className={styles.flex_btn}>
          <Button>Compra</Button>
          </div>
        </div>
        <div>
          <img src={CarPreto} alt="Carro vintage Preto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
