import styles from "./product-detail-slider.module.scss";
import "./pd_slide.css";
import react from "react";
import { v4 as uuid } from "uuid";

import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
 
//redux imports
import { useSelector, useDispatch } from "react-redux";
import { handleProductView } from "../../storee/reducers/productDetail/productDetailThunk";
import { useParams } from "react-router-dom";

export const ProductDetailSlider = () => {
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


  //navigation of the slides

  const goToNextSlide = () => {
    if (SwiperRef.current && SwiperRef.current.swiper) {
      SwiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (SwiperRef.current && SwiperRef.current.swiper) {
      SwiperRef.current.swiper.slidePrev();
    }
  };

  //slider state
  const [activeSlide, setActiveSlide] = react.useState(0);
  const handleBottomSliderImageClick = (index) => {
    setActiveSlide(index);

    if (SwiperRef.current && SwiperRef.current.swiper) {
      SwiperRef.current.swiper.slideTo(index);
    }
  };

  const SwiperRef = react.useRef(null);

  // redux get product detail by id
  const { id: productId } = useParams();
  const bestId = productId.slice(1);
  const dispatchPD = useDispatch();

  const { productView} = useSelector((state) => state.productView);
  react.useEffect(() => {
    dispatchPD(handleProductView(bestId));
  }, [dispatchPD, bestId]);

if (!productView) {
  return <div>Loading...</div>;
}
 

  return (
    <>
      <section className={styles.pdSwiper}>
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
          }}
          className={styles.swiper}
          grabCursor={true}
          initialSlide={activeSlide}
          ref={SwiperRef}>
          {productView?.data[0]?.attributes?.sliderImgs?.data?.map(
            (array) => {
              return (
                <SwiperSlide key={uuid()} className={styles.swiperSlide}>
                  <div>
                    <img
                      src={`${import.meta.env.VITE_UPLOAD_IMG}${
                        array?.attributes?.url
                      }`}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        {screenWidth >= 768 && (
          <span className={styles.swiper_button_next} onClick={goToNextSlide}>
            <i className={`${"fa-solid fa-angle-right"} ${"angle-right"}`}></i>
          </span>
        )}
        {screenWidth >= 768 && (
          <span className={styles.swiper_button_prev} onClick={goToPrevSlide}>
            <i className={`${"fa-solid fa-angle-left"} ${"angle-left"}`}></i>
          </span>
        )}
      </section>
      <section className={styles.pdSwiperBottom}>
        <Swiper
          loop={false}
          slidesPerView={4}
          spaceBetween={10}
          className={styles.swiperBottom}>
          {productView?.data[0]?.attributes?.sliderImgs?.data?.map(
            (array, index) => {
              return (
                <SwiperSlide key={uuid()} className={styles.swiperSlideBottom}>
                  <div onClick={() => handleBottomSliderImageClick(index)}>
                    <img
                      src={`${import.meta.env.VITE_UPLOAD_IMG}${
                        array.attributes?.url
                      }`}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
    </>
  );
};
