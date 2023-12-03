import styles from "./shopping-cart-box.module.scss";
import React from "react";
import { v4 as uuid } from "uuid";

//redux imports
import { useDispatch } from "react-redux";
import { addToCart } from "../../storee/reducers/cartData/cartReducer";

//route
import { Link } from "react-router-dom";

export const ShoppingCartBox = ({
  img,
  title,
  place,
  totalPrice,
  id,
  onClick,
  amount,
  uniqueArrayProps,
  checked
}) => {
  // mobile-desktop deyisiklikler
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // handling increments and decrements of product in the cartBox
  const dispatchCartArray = useDispatch();

  const handleIncrement = () => {
    uniqueArrayProps.map((obj) => {
      if (obj.id == id) {
        console.log(amount, "amount");
        dispatchCartArray(addToCart({ ...obj, amount: obj.amount + 1 }));
      }
    });
  };

  const handleDecrement = () => {
    uniqueArrayProps.map((obj) => {
      if (obj.id == id) {
        if (obj.amount == 1) {
          dispatchCartArray(addToCart({ ...obj, amount: 1 }));
        } else {
          dispatchCartArray(addToCart({ ...obj, amount: obj.amount - 1 }));
        }
      }
    });
  };

  const [isChecked, setIsChecked] = React.useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked); 
    uniqueArrayProps.map((obj) => {
      if (obj.id == id) {
        dispatchCartArray(addToCart({ ...obj, checked: !checked }));
      }
    });
  };


  return (
    <div className={styles.cartBox} key={id}>
      <div className={styles.cartBox_start}>
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={checkHandler}
        />
        <Link
          to={`/product-detail/:${id}`}
          key={uuid()}
          className={styles.link}>
          <div className={styles.img_holder}>
            <img src={img} />
          </div>
        </Link>
        <span>
          <div className={styles.h1}>
            <h1>{title}</h1>
          </div>
          <h2>{place}</h2>
          <h3>{`$${totalPrice}`}</h3>
        </span>
      </div>
      <div className={styles.cartBox_end}>
        {screenWidth < 768 && <h1>Add to Favourite</h1>}
        <span className={styles.spanBoxEnd}>
          <div className={styles.amountBox}>
            <i
              className={
                amount == 1
                  ? `${"fa-solid fa-minus"} ${styles.minus}`
                  : `${"fa-solid fa-minus"} ${styles.minus_active}`
              }
              onClick={handleDecrement}></i>
            <h1 className={styles.amount}>{amount}</h1>
            <i
              className={`${"fa-solid fa-plus"} ${styles.plus}`}
              onClick={handleIncrement}></i>
          </div>
          <div className={styles.deleteBtn_holder} onClick={onClick}>
            <i
              className={`${"fa-regular fa-trash-can"} ${
                styles.deleteBtn
              }`}></i>
          </div>
        </span>
      </div>
    </div>
  );
};
