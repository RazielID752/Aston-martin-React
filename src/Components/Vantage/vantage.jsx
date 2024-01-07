import styles from "./vantage.module.css";
import Button from "../Button/button";

const Vantage = () => {
  return (
    <section className={styles.Vantage}>
      <div className={styles.img_order}>
        <img src="/carrow-cinza.png" alt="Aston martin Vantage Cinza" />
      </div>
      <div className={styles.text_order}>
        <h2>

        </h2>
        <p className={styles.title_vantage}>
          Vantage é cru e instintivo, inabalável em seu propósito singular:
          dominar os sentidos através de seu design de renome mundial,
          desempenho ágil e habilidade artesanal dedicada.
        </p>
        <div className={styles.button_vantage}>
          <Button>saiba mais</Button>
        </div>
      </div>
    </section>
  );
};

export default Vantage;
