import styles from "./SearchResult.module.scss";
import "./SearchIcons.scss";
import { BiFilterAlt } from "react-icons/Bi";
import { RxHamburgerMenu } from "react-icons/Rx";
import React from "react";
import { FilterBox, ProductBox } from "../../components";
import { v4 as uuid } from "uuid";
//route
import { Link } from "react-router-dom";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { getOneCategory } from "../../storee/reducers/categories/categoriesThunk";

export const SearchResult = () => {
  //product boxes redux
  const { categoryArray, idReducer, loading } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  // sileceksen
  let nese = "Gaming Gear";
  let showNumber = categoryArray?.data?.length || 0;

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

  //filter button
  const [filterBtn, setFilterBtn] = React.useState(false);
  function handleFilterBtn() {
    setFilterBtn((prev) => !prev);
  }
  if(categoryArray?.data?.length == 0 || categoryArray?.length == 0){
    return <h1 className={styles.notFound}>
      product not found:(
    </h1>
  }

  return (
    <section className={styles.searchResult}>
      <div className={styles.search_start}>
        <div className={styles.search_nav}>
          <h1 className={styles.h1_green}>Home</h1>
          <i className={`${styles.angle} ${"fa-solid fa-chevron-right"}`}></i>
          <h1 className={styles.h1_green}>Electronic</h1>
          <i className={`${styles.angle} ${"fa-solid fa-chevron-right"}`}></i>
          <h1>Gaming Gear</h1>
        </div>
        <div className={styles.showBoxAndIcons}>
          <div className={styles.search_showBox}>
            <div
              className={
                styles.search_showing
              }>{`Showing product for “${nese}”`}</div>
            <div
              className={
                styles.search_showNumber
              }>{`Showing 1 - ${showNumber} Products`}</div>
          </div>
          <div className={styles.search_sortAndIcons}>
            <div className={styles.search_sortAndIcons_part1}>
              {screenWidth >= 768 && <h1 className={styles.sort}>Sort By:</h1>}
              <select name="categories">
                <option value="Relevant Products">Relevant Products</option>
                <option value="Relevant Products">Relevant Products</option>
              </select>
            </div>
            <div className={styles.iconsBigSmall}>
              {screenWidth < 768 && (
                <i className={styles.filterIcn} onClick={handleFilterBtn}>
                  <BiFilterAlt />
                </i>
              )}
              <div className={styles.border}></div>
              <i className={styles.viewSmall}>
                <i className={styles.pencere}>
                  <div className={styles.pencereIcon}>
                    <div className={styles.pencerePart}></div>
                    <div className={styles.pencerePart}></div>
                    <div className={styles.pencerePart}></div>
                    <div className={styles.pencerePart}></div>
                  </div>
                </i>
              </i>
              <i className={styles.viewLarge}>
                <RxHamburgerMenu />
              </i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.filterAndBoxes}>
        {filterBtn && screenWidth < 768 && (
          <h1
            className={styles.x}
            onClick={() => {
              setFilterBtn(false);
            }}>
            X
          </h1>
        )}
        {(screenWidth >= 768 && <FilterBox />) ||
          (screenWidth < 768 && filterBtn && (
            <FilterBox classFilter={styles.classFilter} />
          ))}
        <div className={styles.paginationAndBoxes}>
          <div className={styles.searchResult_boxes}>
            {categoryArray.data?.map(({ id, attributes }) => {
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
          <div className={styles.pagination}>
            {categoryArray?.meta?.pagination?.pageCount == 2 && (
              <h1
                onClick={() => {
                  dispatch(getOneCategory({ id: idReducer, page: 1 }));
                  window.scrollTo(0, 0);
                }}>
                1
              </h1>
            )}
            {categoryArray?.meta?.pagination?.pageCount == 2 && (
              <h1
                onClick={() => {
                  dispatch(getOneCategory({ id: idReducer, page: 2 }));
                  window.scrollTo(0, 0);
                }}>
                2
              </h1>
            )}
            {categoryArray?.meta?.pagination?.pageCount == 2 && (
              <i
                className={`${"fa-solid fa-chevron-right"} ${styles.angle}`}
                onClick={() => {
                  dispatch(getOneCategory({ id: idReducer, page: 2 }));
                  window.scrollTo(0, 0);
                }}></i>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
