import styles from "./catagory-box.module.scss";
import { v4 as uuid } from "uuid";




export const CategoryBox = ({ img, title, amount, onClick }) => {
  
  return (
    <div className={styles.catagoryBox} key={uuid()} onClick={onClick}>
      <img src={img} className={styles.catagoryImg} key={uuid()} />
      <div className={styles.catagoryTitle} key={uuid()}>
        {title}
      </div>
      <div className={styles.catagoryAmount} key={uuid()}>
        {amount}
      </div>
    </div>
  );
};
