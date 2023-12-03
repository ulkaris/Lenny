import styles from "./product-summary.module.scss";
import promoImg from "../../assets/imgs/discount-shape.png";
import { Button } from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addToCartArraySelected } from "../../storee/reducers/cartData/cartReducer";

export const ProductSummaryBox = () => {
  //redux add to cart part
  const { cartArray } = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  function removeDuplicates(array, property) {
    const resultArray = [];
    const seen = new Map(); // To keep track of seen values based on the property

    for (const item of array) {
      const key = item[property];
      seen.set(key, item); // Store the last occurrence of each key
    }

    for (const item of seen.values()) {
      resultArray.push(item);
    }

    return resultArray;
  }

  const uniqueArray = removeDuplicates(cartArray, "id");

  let selectedProduct = 0;
  let totalPrice = 0;
  let selectedProductArr = [];

  uniqueArray.map((obj) => {
    if (obj.checked) {
      totalPrice += obj.amount * obj.price;
      selectedProduct += obj.amount;
      selectedProductArr.push({ name: obj.title, price: obj.price, amount: obj.amount, image: obj.image, place: obj.place, id: obj.id});
      
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>Product Summary</div>
        <div
          className={
            styles.selectedProducts
          }>{`${selectedProduct} Product Selected`}</div>
        {selectedProduct > 0 && (
          <div className={styles.selectedProducts_container}>
            {selectedProductArr.map((obj) => {
              return (
                <div key={uuid()} className={styles.selectedProducts_box}>
                  <h1>{obj.name}</h1>
                  <h2>{`$${obj.price}`}</h2>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <span className={styles.mainBox}>
        <div className={styles.priceBox}>
          <h1>Total Price</h1>
          <h1>{`$${totalPrice.toFixed(2)}`}</h1>
        </div>
        <div className={styles.priceBox}>
          <h1>Total Price (Discount)</h1>
          <h1>{`$${totalPrice.toFixed(2)}`}</h1>
        </div>
        <div className={styles.priceBox}>
          <h1>Tax & Fee</h1>
          <h1>$0</h1>
        </div>
      </span>
      <div className={styles.end}>
        <span className={styles.totalPriceBox}>
          <h3>Total Price</h3>
          <h3>{`$${totalPrice.toFixed(2)}`}</h3>
        </span>
        <div className={styles.promoBox}>
          <div className={styles.promoBox_start}>
            <img src={promoImg} />
            <span className={styles.promoApplied}>
              <h1>Promo applied</h1>
              <h2>1x shipping discount used</h2>
            </span>
          </div>
          <i
            className={`${"fa-solid fa-chevron-right"} ${
              styles.angle_right
            }`}></i>
        </div>
        <Link
          to={`/checkout`}
          key={uuid()}
          className={styles.link}
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          <Button
            buttonTitle={"Checkout"}
            btnClass={styles.checkout}
            onClick={() => {
              dispatch(addToCartArraySelected({ value: selectedProductArr }));
              console.log(selectedProductArr, "sel arr");
            }}
          />
        </Link>
      </div>
    </div>
  );
};
