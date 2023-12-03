import "./logo.module.scss";
import logoBody from "../../assets/imgs/logo-rectangle.png";
import logoLine from "../../assets/imgs/logo-line.png";
import styles from "./logo.module.scss";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  //nav
  const nav = useNavigate();

  return (
    <div
      className={styles.logoSaver}
      onClick={() => {
        nav("/");
        window.scrollTo(0, 0);
      }}>
      <div className={styles.logoImg}>
        <img src={logoBody} className={styles.logoBody} />
        <img src={logoLine} className={styles.logoLine} />
      </div>
      <h1 className={styles.lenny}>lenny.</h1>
    </div>
  );
};
