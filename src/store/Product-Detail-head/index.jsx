import styles from "./product-detail-head.module.scss";
import { ProductDetailSlider, Button } from "../../components";
import React from "react";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { handleProductView } from "../../storee/reducers/productDetail/productDetailThunk";
import { useParams } from "react-router-dom";
import {addToCart} from '../../storee/reducers/cartData/cartReducer';

export const ProductDetailHead = () => {
  // redux get product detail by id
  const { id: productId } = useParams();
  const bestId = productId.slice(1);
  const dispatchPD = useDispatch();
  const dispatchCartArray = useDispatch();

  const { productView } = useSelector((state) => state.productView);
  

  //fetch redux
  React.useEffect(() => {
    dispatchPD(handleProductView(bestId));
  }, [dispatchPD, bestId]);
 
  if (productView == false) {
    return <div>Loading...</div>;
  }

  //product data
  const id = productView?.data[0]?.id;
const title = productView?.data[0]?.attributes?.title;
const price = productView?.data[0]?.attributes?.price;
const place = productView?.data[0]?.attributes?.place;
const image = productView?.data[0]?.attributes?.img?.data?.attributes?.url;
const checked = false;
let amount = 0;

let btnClickBtn = 0;
  //add to cart part redux
    const handleAddToCart = () => {
      btnClickBtn = btnClickBtn + 1;

      amount = amount + 1;
      dispatchCartArray(addToCart({title, price, place,id, amount, image, checked}));
    };

  return (
    <section className={styles.pd_head_section}>
      <div className={styles.search_nav}>
        <h1 className={styles.h1_green}>Home</h1>
        <i className={`${styles.angle} ${"fa-solid fa-chevron-right"}`}></i>
        <h1 className={styles.h1_green}>Electronic</h1>
        <i className={`${styles.angle} ${"fa-solid fa-chevron-right"}`}></i>
        <h1>Gaming Gear</h1>
      </div>
      <div className={styles.sliderAndDetails}>
        <div className={styles.sliderHolder}>
          <ProductDetailSlider />
        </div>
        <div className={styles.details}>
          <div className={styles.details_head}>
            <span>
              <h1>{productView?.data[0]?.attributes?.title}</h1>
              <div className={styles.starAndRating}>
                <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
                <h1>{productView?.data[0]?.attributes?.rating}</h1>
                <h2>{`${productView?.data[0]?.attributes?.sold} Sold`}</h2>
              </div>
            </span>
            <div
              className={
                styles.price
              }>{`$${productView?.data[0]?.attributes?.price}`}</div>
            <p>{productView?.data[0]?.attributes?.description}</p>
          </div>
          <div className={styles.details_bottom}>
            <h1>Product Variant:</h1>
            <div className={styles.typeAndColor_boxes}>
              {productView?.data[0]?.attributes?.type && (
                <div className={styles.typeAndColor_box}>
                  <h2>Type</h2>
                  <select name="" id="">
                    <option value="">wireless</option>
                    <option value="">wireless</option>
                    <option value="">wireless</option>
                  </select>
                </div>
              )}
              <div className={styles.typeAndColor_box}>
                <h2>Color</h2>
                <select name="" id="">
                  <option value="">{productView?.data[0]?.attributes?.color}</option>
                  <option value="">{productView?.data[0]?.attributes?.color}</option>
                  <option value="">{productView?.data[0]?.attributes?.color}</option>
                </select>
              </div>
            </div>
            <div className={styles.btns}>
              <Button btnClass={styles.btn_buy} buttonTitle={"Buy"} />
              <Button btnClass={styles.btn_add} buttonTitle={"Add to Chart"} onClick={handleAddToCart}>
                <i
                  className={`${"fa-solid fa-cart-shopping"} ${
                    styles.cart
                  }`}></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
