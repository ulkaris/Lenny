import styles from "./product-box.module.scss";

export const ProductBox = ({
  img,
  productName,
  price,
  place,
  rating,
  soldAmount
}) => {
  return (
    <div className={styles.ProductBox}>
      <div className={styles.boxPart1}>
        <div className={styles.heart}>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className={styles.boxImg} ><img src={img}/></div>
      </div>
      <div className={styles.boxPart2}>
        <div className={styles.nameAndPrice}>
          <div className={styles.h1}><h1>{productName}</h1></div>
          {price && <div className={styles.price}>{`$${price}`}</div>}
        </div>
        <div className={styles.place}>{place}</div>
        <div className={styles.boxEnd}>
          <i
            className={`${styles.star} ${"fa-solid fa-star"}`}></i>
          <div className={styles.ratingNumber}>
            {rating}
          </div>
          <div>
            <div
              className={styles.soldAmount}>{`${soldAmount} Sold`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
