import styles from "./homePage.module.scss";
import react from "react";
import {
  ProductBox,
  Button,
  CardComponent
} from "../../components";
import { CategoriesSlider } from "../../store/Home-categories-slider";
import { HomeHead } from "../../store/Home-head";
import { v4 as uuid } from "uuid";

//imgs
import article1 from "../../assets/imgs/home/home-article-1.png";
import article2 from "../../assets/imgs/home/home-article-2.png";
import article3 from "../../assets/imgs/home/home-article-3.png";
import ipad from "../../assets/imgs/home/iPad Air 2020.png";

//redux
import { useSelector, useDispatch } from "react-redux";
import { handleLoadMore } from "../../storee/reducers/loadMore/loadMoreThunk";
import { increment } from "../../storee/reducers/loadMore/loadMoreReducer";

//route
import { Link } from "react-router-dom";

export const HomePage = () => {

  //load more
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const { popularProducts, value, loading } = useSelector(
    (state) => state.loadmore
  );

  const popularProductsData = popularProducts || [];

  

  const handleLoadMoreBtn = () => {
    dispatch2(increment());
    dispatch(handleLoadMore(value + 4));
  };

  react.useEffect(() => {
    dispatch(handleLoadMore(value));
  }, []);


  return (
    <section className={styles.homePage}>
      <HomeHead />

      <div className={styles.home_catagories}>
        <div className={styles.home_catagories_start}>
          <div className={styles.home_catagories_title}>Featured Category</div>
          <Button
            buttonTitle={"View Detail"}
            btnClass={styles.home_catagories_btn}
          />
        </div>
        <CategoriesSlider />
      </div>

      <div className={styles.home_products}>
        <div className={styles.home_products_title}>
          Popular Product on Lenny
        </div>
        <div className={styles.home_products_content}>
          Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
        </div>
        <div className={styles.justcont}>
          <div className={styles.home_products_boxes}>
            {popularProductsData.data?.map(({ id, attributes }) => {
              return loading ? (
                <h1 className={styles.loading} key={uuid()}>
                  Loading...
                </h1>
              ) : (
                <Link
                  to={`/product-detail/:${id}`}
                  key={uuid()}
                  className={styles.link}
                  onClick={() => {window.scrollTo(0, 0)}}>
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
        <Button
          buttonTitle={"Load More"}
          btnClass={styles.home_products_btn}
          onClick={handleLoadMoreBtn}
        />
      </div>

      <div className={styles.home_ipadAd}>
        <div className={styles.ipadImgEmpty}></div>
        <img src={ipad} />
        <div className={styles.home_ipadAd_end}>
          <div className={styles.home_ipadAd_title}>Ipad Air Gen 5</div>
          <div className={styles.home_ipadAd_content}>
            Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
            sapien quam risus sed diam.
          </div>
          <div className={styles.home_ipad_btns}>
            <Button
              buttonTitle={"Buy Now"}
              btnClass={styles.home_ipadAd_btnBuy}
            />
            <Link to={`/product-detail/:8`}
                  key={uuid()}
                  className={styles.link}>
              <Button
                buttonTitle={"View Detail"}
                btnClass={styles.home_ipadAd_btnView}
                onClick={() => {window.scrollTo(0, 0)}}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.home_article}>
        <div className={styles.home_article_start}>
          <div className={styles.home_article_title}>Lenny’s Article</div>
          <Button
            buttonTitle={"View Detail"}
            btnClass={styles.home_article_btn}
          />
        </div>
        <div className={styles.home_article_boxes}>
          <CardComponent
            img={article1}
            date={"22 Dec 2022"}
            title={"Make your desk more neat and beautiful"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras"
            }
          />
          <CardComponent
            img={article2}
            date={"22 Dec 2022"}
            title={"What are the fashion trend in 2023?"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras"
            }
          />
          <CardComponent
            img={article3}
            date={"22 Dec 2022"}
            title={"Tips for Work Life Balance"}
            content={
              "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras"
            }
          />
        </div>
      </div>
    </section>
  );
};
