import styles from "./checkoutPage.module.scss";
import react from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  ProductBox,
  ProductSummaryBox,
  ShoppingCartBox,
} from "../../components";
import shipping from "../../assets/imgs/shipping.png";
import location from "../../assets/imgs/location.png";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { handleRelated } from "../../storee/reducers/relatedProduct/relatedThunk";

//route
import { Link } from "react-router-dom";

export const CheckoutPage = () => {
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
  // console.log(selectedProdArray, 'seleted array prod');
  react.useEffect(() => {
    dispatch(handleRelated(4));
  }, []);
  const relatedProductsData = relatedProducts || [];

  //cartBoxes
  const { cartArraySelected } = useSelector((state) => state.cartData);

  return (
    <section className={styles.checkoutPage}>
      <div className={styles.sc_head}>
        <div className={styles.titleBox}>
          <h1>Checkout</h1>
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
        <div className={styles.containerAddress_wrapper}>
          <div className={styles.addressBox}>
            <div className={styles.addressBox_start}>
              <div className={styles.addressBox_title}>Shipping Address</div>
              <span>
                <img className={styles.locationIcon} src={location} />
                <div className={styles.addressDatas}>
                  <div className={styles.mainAddressBox}>
                    <h1>Gofanny Karina</h1>
                    <h2>Main Address</h2>
                  </div>
                  <div className={styles.addressNumber}>081277939572</div>
                  <div className={styles.addressMainTitle}>
                    2021 Royalty Boulevard Portland, OR 98199
                  </div>
                </div>
              </span>
            </div>
            <button>Other Address</button>
          </div>
          <div className={styles.container}>
            <div className={styles.container_title}>Selected Product</div>
            <div className={styles.cartBoxes}>
              {cartArraySelected.map((obj) => {
                return (
                  <>
                    <ShoppingCartBox
                      img={`${import.meta.env.VITE_UPLOAD_IMG}${
                        obj.image
                      }`}
                      title={obj.name}
                      amount={obj.amount}
                      place={obj.place}
                      id={obj.id}
                      totalPrice={obj.price}
                      checked={true}
                    />
                  </>
                );
              })}
            </div>
            <div className={styles.container_title}>Shipping</div>
            <div className={styles.shippingBox}>
              <div className={styles.shippingBox_start}>
                <img src={shipping} />
                <span>
                  <h1>TIKI</h1>
                  <h2>4 - 7 Days</h2>
                </span>
              </div>
              <div className={styles.shippingBox_end}>
                <h1>$129</h1>
                <i
                  className={`${"fa-solid fa-angle-down"} ${
                    styles.arrowDown
                  }`}></i>
              </div>
            </div>
          </div>
        </div>
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
