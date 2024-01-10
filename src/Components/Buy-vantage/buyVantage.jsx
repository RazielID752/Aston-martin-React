import styles from "./buyVantage.module.css";
import Button from "../Button/button";
import carRed from "../../assets/carro-vermelho.png";

const BuyVantage = () => {
  return (
    <section className={styles.BuyVantage}>
      <div className={styles.BuyVantage_wrapper}>
        <div className={styles.BuyVantage_content}>
          <div>
            <h2 className={styles.BuyVantage_h2}>Velocidade e qualidade aston martin!</h2>
            <p className={styles.BuyVantage_p}>Obtenha os nossos melhores carros e seja seu sonho, desempenho ágil mais habilidade artesanal.</p>
            <div className={styles.BuyVantage_btn}>
            <Button>Comprar</Button>
            </div>
          </div>
          <div>
            <img src={carRed} alt="Carro vermelho" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyVantage;
