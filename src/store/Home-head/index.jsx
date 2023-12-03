import styles from "./home-head.module.scss";
import "./home-head.scss";
import react from "react";
import { Button, ProductBoxJH } from "../../components";
import headImg from "../../assets/imgs/home/head-bg.png";
import greenJacket from "../../assets/imgs/home/greenJacket.png";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

export const HomeHead = () => {
  const swiperRef = react.useRef(null);
  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const nav = useNavigate();

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
        }}>
        <SwiperSlide>
          <div className={styles.home_head}>
            <div className={styles.home_head_start}>
              <div className={styles.home_head_title}>
                Upgrade Your Wardrobe With Our Collection
              </div>
              <div className={styles.home_head_content}>
                Eget neque aenean viverra aliquam tortor diam nunc. Dis
                pellentesque lectus quis velit fusce aenean nunc dui
                consectetur. Eu lorem est ullamcorper nisl amet non mollis.
              </div>
              <div className={styles.home_head_btns}>
                <Button
                  btnClass={styles.home_head_buy}
                  buttonTitle={"Buy Now"}
                />
                <Button
                  btnClass={styles.home_head_view}
                  buttonTitle={"View Detail"}
                  onClick={() => {
                    nav("/product-detail/:3");
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
            </div>
            <div className={styles.home_head_end}>
              <div className={styles.head_homeImg_parent}>
                <img src={headImg} className={styles.home_head_img} />
                <div className={styles.home_head_productBoxParent}>
                  <div className={styles.pointerIcons}>
                    <div className={styles.pointerBig_saver}>
                      <div className={styles.productbox_pointerBig}></div>
                    </div>
                    <div className={styles.productbox_pointerSmall}></div>
                    <div className={styles.productbox_pointerSmall}></div>
                    <div className={styles.productbox_pointerSmall}></div>
                    <div className={styles.productbox_pointerSmall}></div>
                  </div>
                  <ProductBoxJH
                    img={greenJacket}
                    place={"Cimahi, Bandung"}
                    rating={"4.8"}
                    productName={"Green Jacket V2"}
                    soldAmount={"460"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.home_head}>
            <div className={styles.home_head_start}>
              <div className={styles.home_head_title}>
                Upgrade Your Wardrobe With Our Collection
              </div>
              <div className={styles.home_head_content}>
                Eget neque aenean viverra aliquam tortor diam nunc. Dis
                pellentesque lectus quis velit fusce aenean nunc dui
                consectetur. Eu lorem est ullamcorper nisl amet non mollis.
              </div>
              <div className={styles.home_head_btns}>
                <Button
                  btnClass={styles.home_head_buy}
                  buttonTitle={"Buy Now"}
                />
                <Button
                  btnClass={styles.home_head_view}
                  buttonTitle={"View Detail"}
                  onClick={() => {
                    nav("/product-detail/:3");
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
            </div>
            <div className={styles.home_head_end}>
              <div className={styles.head_homeImg_parent}>
                <img src={headImg} className={styles.home_head_img} />
                <div className={styles.home_head_productBoxParent}>
                  <div className={styles.pointerIcons}>
                    <div className={styles.pointerBig_saver}>
                      <div className={styles.productbox_pointerBig}></div>
                    </div>
                    <div className={styles.productbox_pointerSmall}></div>
                    <div className={styles.productbox_pointerSmall}></div>
                    <div className={styles.productbox_pointerSmall}></div>
                    <div className={styles.productbox_pointerSmall}></div>
                  </div>
                  <ProductBoxJH
                    img={greenJacket}
                    place={"Cimahi, Bandung"}
                    rating={"4.8"}
                    productName={"Green Jacket V2"}
                    soldAmount={"460"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={"swiper-button-next"} onClick={goToNextSlide}>
        <div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
