import styles from "./product-box-jh.module.scss";
import { useNavigate } from "react-router-dom";

export const ProductBoxJH = ({
  img,
  productName,
  price,
  place,
  rating,
  soldAmount,
}) => {
  const nav = useNavigate();

  return (
    <div
      className={styles.ProductBox}
      onClick={() => {
        nav("/product-detail/:3");
        window.scrollTo(0, 0);
      }}>
      <div className={styles.boxPart1}>
        <div className={styles.heart}>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className={styles.boxImg}>
          <img src={img} />
        </div>
      </div>
      <div className={styles.boxPart2}>
        <div className={styles.nameAndPrice}>
          <div className={styles.h1}>
            <h1>{productName}</h1>
          </div>
          {price && <div className={styles.price}>{`$${price}`}</div>}
        </div>
        <div className={styles.place}>{place}</div>
        <div className={styles.boxEnd}>
          <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
          <div className={styles.ratingNumber}>{rating}</div>
          <div>
            <div className={styles.soldAmount}>{`${soldAmount} Sold`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
