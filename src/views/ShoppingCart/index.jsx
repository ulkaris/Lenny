import styles from "./shopping-cart.module.scss";
import react from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  ProductBox,
  CartBoxContainer,
  ProductSummaryBox,
} from "../../components";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { handleRelated } from "../../storee/reducers/relatedProduct/relatedThunk";

//route
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  // mobile-desktop changes
  const [screenWidth, setScreenWidth] = react.useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  react.useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  //related products
  const dispatch = useDispatch();
  const { relatedProducts, loading } = useSelector((state) => state.related);
  const { cartArray } = useSelector((state) => state.cartData);
  react.useEffect(() => {
    dispatch(handleRelated(4));
  }, []);
  const relatedProductsData = relatedProducts || [];

  return (
    <section className={styles.shoppingCart}>
      <div className={styles.sc_head}>
        <div className={styles.titleBox}>
          <h1>Shopping Chart</h1>
          <h2>Showing your choices product</h2>
        </div>
        <span>
          {screenWidth >= 768 && <h1 className={styles.sort}>Sort By:</h1>}
          <select name="" id="">
            <option value="">
              {screenWidth < 768 ? "Sort By Latest Added" : "Latest Added"}
            </option>
            <option value="">Latest Added</option>
          </select>
        </span>
      </div>

      <div className={styles.cart_main}>
        {cartArray.length > 0 && <CartBoxContainer />}
        {screenWidth >= 768 && cartArray.length > 0 && <ProductSummaryBox />}
      </div>
      {cartArray.length == 0 && (
        <div className={styles.emptyBox}>
          <h3 className={styles.emptyCart}>Your shopping cart is empty.</h3>
          <Link
            to={`/`}
            key={uuid()}
            className={styles.link}
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <Button buttonTitle={"Go Shopping"} btnClass={styles.shopping} />
          </Link>
        </div>
      )}

      <div className={styles.related}>
        <div className={styles.related_start}>
          <div className={styles.related_title}>Related Product</div>
          <Button buttonTitle={"View Detail"} btnClass={styles.related_btn} />
        </div>
        <div className={styles.related_boxes}>
          {relatedProductsData.data?.map(({ id, attributes }) => {
            return loading ? (
              <h1 className={styles.loading} key={uuid()}>
                Loading...
              </h1>
            ) : (
              <Link
                to={`/product-detail/:${id}`}
                key={uuid()}
                className={styles.link}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                <ProductBox
                  img={`${import.meta.env.VITE_UPLOAD_IMG}${
                    attributes?.img?.data?.attributes?.url
                  }`}
                  productName={attributes?.title}
                  place={attributes?.place}
                  rating={attributes?.rating}
                  soldAmount={attributes?.sold}
                  price={attributes?.price}
                  key={uuid()}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {screenWidth < 768 && cartArray.length > 0 && <ProductSummaryBox />}
    </section>
  );
};
