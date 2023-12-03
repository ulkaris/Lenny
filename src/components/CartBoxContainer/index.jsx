import styles from "./cart-box-container.module.scss";
import { v4 as uuid } from "uuid";
import { ShoppingCartBox } from "../../components";
import imgLogo from "../../assets/imgs/merchantLogo.png";
import { removeFromCart } from "../../storee/reducers/cartData/cartReducer";

//redux imports
import { useSelector, useDispatch } from "react-redux";



export const CartBoxContainer = () => {
  const dispatchRemove = useDispatch();

  //cart boxes
  const { cartArray } = useSelector((state) => state.cartData);
  console.log(cartArray, 'cart Array real');

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
  console.log(uniqueArray, "uniw array in cart");


  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={imgLogo} />
        <span>
          <h1>Logitech Indonesia</h1>
          <h2>Central Jakarta</h2>
        </span>
      </div>
      {uniqueArray?.map((obj) => {
        return (
          <ShoppingCartBox
              key={uuid()}
              img={`${import.meta.env.VITE_UPLOAD_IMG}${obj.image}`}
              place={obj.place}
              title={obj.title}
              id={obj.id}
              amount={obj.amount}
              uniqueArrayProps = {uniqueArray}
              onClick={() => dispatchRemove(removeFromCart({ id: obj.id }))}
              totalPrice={(obj.price*obj.amount).toFixed(2)}
              checked={obj.checked}
            />
        );
      })}
    </div>
  );
};
