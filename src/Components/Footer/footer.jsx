import styles from "./footer.module.css";
import LogoBottom from "../../assets/logo-bottom.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.img_container}>
          <img src={LogoBottom} alt="Logo Aston martin" />
        </div>
        <div>
          <p className={styles.footer_p}>
            Os valores de emissões/economia de combustível citados são
            provenientes de resultados de testes regulamentados oficiais obtidos
            através de testes de laboratório. Servem apenas para fins de
            comparabilidade e podem não refletir a sua experiência de condução
            real, que pode variar dependendo de fatores como condições da
            estrada, condições meteorológicas, carga do veículo e estilo de
            condução.
          </p>
        </div>
        <div className={styles.copy_container}>
          <div>
            <p className={styles.copy_p}>
              © 2023 Aston Martin. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <a href="">Política de Privacidade</a>
            <a href="">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
