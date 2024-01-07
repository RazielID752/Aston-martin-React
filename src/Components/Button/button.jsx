import styles from "./button.module.css";

const Button = () =>{
  return (
    <div className={styles.Button}>
      <a className={styles.btn} href="#">
        saiba mais
      </a>
    </div>
  );
};

export default Button;