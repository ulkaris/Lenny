import styles from "./filter-box.module.scss";
import react from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPlace } from "../../storee/reducers/filterPlace/filterPlaceThunk";

export const FilterBox = ({classFilter}) => {

  //product boxes redux
  const { apiFirst, apiSecond } = useSelector((state) => state.counter);
  const { placeArray } = useSelector((state) => state.place);
  const dispatch = useDispatch();

  react.useEffect(() => {
    dispatch(getPlace(apiFirst, apiSecond));
  }, [dispatch]);







  //bestfilter
  const [bestFilter, setBestFilter] = react.useState(false);

  const handleBestFilter = () => {
    setBestFilter((prev) => !prev);
  };

  //location
  const [locationn, setLocation] = react.useState(false);

  const handleLocation = () => {
    setLocation((prev) => !prev);
  };

  //category
  const [category, setCategory] = react.useState(false);

  const handleCategory = () => {
    setCategory((prev) => !prev);
  };

  //price range
  const [priceRange, setPriceRange] = react.useState(false);

  const handlePriceRange = () => {
    setPriceRange((prev) => !prev);
  };

  return (
    <div className={`${styles.filter_boxes} ${classFilter}`}>
      <div className={styles.filter_title}>Filter Option</div>
      <div className={styles.filter_box}>
        <div
          className={styles.filter_boxTitle_holder}
          onClick={handleBestFilter}>
          <div className={styles.filter_box_title}>Best Filter</div>
          {!bestFilter && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-down"}`}></i>
          )}
          {bestFilter && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-up"}`}></i>
          )}
        </div>
        {bestFilter && (
          <ul className={styles.filterUl}>
            <li className={styles.li}>
              <input type="checkbox" className={styles.checkbox}/>
              <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
              <div>4 stars or upper</div>
            </li>
            <li className={styles.li}>
              <input type="checkbox" className={styles.checkbox}/>
              <div>Same-day delivery</div>
            </li>
            <li className={styles.li}>
              <input type="checkbox" className={styles.checkbox} />
              <div>COD</div>
            </li>
            <li className={styles.li}>
              <input type="checkbox" className={styles.checkbox} />
              <div>Discount</div>
            </li>
          </ul>
        )}
      </div>

      <div className={styles.filter_box}>
        <div className={styles.filter_boxTitle_holder} onClick={handleLocation}>
          <div className={styles.filter_box_title}>Location</div>
          {!locationn && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-down"}`}></i>
          )}
          {locationn && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-up"}`}></i>
          )}
        </div>
        {locationn && (
            <ul className={styles.filterUl}>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox}/>
                <div>Addax</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>Same-day delivery</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>COD</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>Discount</div>
              </li>
              <div className={styles.showAll}>Show all</div>
            </ul>
        )}
      </div>

      <div className={styles.filter_box}>
        <div className={styles.filter_boxTitle_holder} onClick={handleCategory}>
          <div className={styles.filter_box_title}>Category</div>
          {!category && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-down"}`}></i>
          )}
          {category && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-up"}`}></i>
          )}
        </div>
        {category && (
            <ul className={styles.filterUl}>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>Electronic</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>Electronic devices</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>Fashion</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox} />
                <div>Action Figure</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox}/>
                <div>Book</div>
              </li>
              <li className={styles.li}>
                <input type="checkbox" className={styles.checkbox}/>
                <div>Gaming</div>
              </li>
              <div className={styles.showAll}>Show All Categories</div>
            </ul>
        )}
      </div>

      <div className={`${styles.filter_box} ${styles.priceRangeBox}`}>
        <div className={styles.filter_boxTitle_holder} onClick={handlePriceRange}>
          <div className={styles.filter_box_title}>Price Range</div>
          {!priceRange && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-down"}`}></i>
          )}
          {priceRange && (
            <i className={`${styles.arrow} ${"fa-solid fa-angle-up"}`}></i>
          )}
        </div>
        {priceRange && (
            <ul className={styles.filterUl}>
              <li className={styles.buttonLi}>
                <div className={styles.usd}>USD</div>
                <input type="number" placeholder="Minimum price" className={styles.priceRangeInput}/>
              </li>
              <li className={styles.buttonLi}>
              <div className={styles.usd}>USD</div>
                <input type="number" placeholder="Maximum price" className={styles.priceRangeInput}/>
              </li>
              <li className={styles.buttonLi}>
                <div>$0 - $200</div>
              </li>
              <li className={styles.buttonLi}>
                <div>$200 - $500</div>
              </li>
              <li className={styles.buttonLi}>
                <div>$500 - $1500</div>
              </li>
            </ul>
        )}
      </div>

    </div>
  );
};
