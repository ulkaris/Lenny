import styles from "./home-categories-slider.module.scss";
import { v4 as uuid } from "uuid";
import React from "react";

import { getCategories } from "../../api/categories";
import { CategoryBox } from "../../components";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { getOneCategory } from "../../storee/reducers/categories/categoriesThunk";
import { updateId } from "../../storee/reducers/categories/categoriesReducer";

import { useNavigate } from "react-router-dom";

import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";

export const CategoriesSlider = () => {
  // mobile-desktop changes
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

  //nav
  const nav = useNavigate();

  //categories
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    getAllCategories();
  }, []);

  //categories get products
  const dispatch = useDispatch();
  const dispatchId = useDispatch();
  const { categoryArray,idReducer } = useSelector((state) => state.categories);
  
  if (!categoryArray) {
    return <div>Loading...</div>;
  }

  if(idReducer == isNaN){
    return <h1>loading...</h1>
  }

  return (
    <section className={styles.CategoriesSlider}>
      <Swiper
        loop={false}
        navigation={true}
        className={styles.swiper}
        slidesPerView={
          (screenWidth < 768 && 2) ||
          (screenWidth >= 768 && screenWidth < 992 && 4) ||
          (screenWidth >= 992 && 5)
        }
        spaceBetween={16}
        grabCursor={true}>
        {categories?.data?.data?.map(({ id, attributes }) => {
          return (
            <SwiperSlide key={uuid()}>
              <CategoryBox
                key={uuid()}
                title={attributes.title}
                amount={`${attributes.amount}k products`}
                img={`${import.meta.env.VITE_UPLOAD_IMG}${
                  attributes.img.data.attributes?.url
                }`}
                onClick={() => {
                  dispatchId(updateId({id}));
                  dispatch(getOneCategory({ id: id, page: 1 }));
                  nav("/search-result");
                  window.scrollTo(0, 0);
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
