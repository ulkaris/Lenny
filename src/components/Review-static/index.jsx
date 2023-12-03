import styles from "./review-static.module.scss";
import react from "react";
import { BiFilterAlt } from "react-icons/Bi";
import profileImg from "../../assets/imgs/profileImg.png";

export const ReviewStatic = () => {
  // mobile-desktop deyisiklikler
  const [screenWidth, setScreenWidth] = react.useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  react.useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    // Clean up the eventlistener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

   //bestfilter
   const [bestFilter, setBestFilter] = react.useState(false);

   const handleBestFilter = () => {
     setBestFilter((prev) => !prev);
   };
 
   //location
   const [location, setLocation] = react.useState(false);
 
   const handleLocation = () => {
     setLocation((prev) => !prev);
   };
   
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_title}>Product Reviews</div>
      <div className={styles.reviews_general}>
        <div className={styles.reviews_general_part1}>
          <h1>4.8</h1>
          <span>
            <div className={styles.stars}>
              <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
              <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
              <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
              <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
              <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
            </div>
            <h2>from 1,25k reviews</h2>
          </span>
        </div>
        <div className={styles.reviews_general_part2}>
          <span>
            <h1>5.0</h1>
            <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
            <div>
              <div className={styles.fullDiv}></div>
            </div>
            <h2>2823</h2>
          </span>
          <span>
            <h1>4.0</h1>
            <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
            <div>
              <div className={styles.fullDivLittle}></div>
            </div>
            <h2>4</h2>
          </span>
          <span>
            <h1>3.0</h1>
            <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
            <div>
              <div className={styles.fullDivEmpty}></div>
            </div>
            <h2>0</h2>
          </span>
          <span>
            <h1>2.0</h1>
            <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
            <div>
              <div className={styles.fullDivEmpty}></div>
            </div>
            <h2>0</h2>
          </span>
          <span>
            <h1>1.0</h1>
            <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
            <div>
              <div className={styles.fullDivEmpty}></div>
            </div>
            <h2>0</h2>
          </span>
        </div>
      </div>

      <div className={styles.filter_list}>
        {screenWidth >= 768 && (
          <div className={styles.filter_boxes}>
            <div className={styles.filter_title}>Reviews Filter</div>
            <div className={styles.filter_box}>
              <div
                className={styles.filter_boxTitle_holder}
                onClick={handleBestFilter}>
                <div className={styles.filter_box_title}>Rating</div>
                {!bestFilter && (
                  <i
                    className={`${
                      styles.arrow
                    } ${"fa-solid fa-angle-down"}`}></i>
                )}
                {bestFilter && (
                  <i
                    className={`${styles.arrow} ${"fa-solid fa-angle-up"}`}></i>
                )}
              </div>
              {bestFilter && (
                <ul className={styles.filterUl}>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
                    <div>5</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
                    <div>4</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
                    <div>3</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
                    <div>2</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <i className={`${styles.star} ${"fa-solid fa-star"}`}></i>
                    <div>1</div>
                  </li>
                </ul>
              )}
            </div>

            <div className={`${styles.filter_box} ${styles.filter_box_last}`}>
              <div
                className={styles.filter_boxTitle_holder}
                onClick={handleLocation}>
                <div className={styles.filter_box_title}>Review Topics</div>
                {!location && (
                  <i
                    className={`${
                      styles.arrow
                    } ${"fa-solid fa-angle-down"}`}></i>
                )}
                {location && (
                  <i
                    className={`${styles.arrow} ${"fa-solid fa-angle-up"}`}></i>
                )}
              </div>
              {location && (
                <ul className={styles.filterUl}>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <div>Product Quality</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <div>Seller Services</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <div>Product Price</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <div>Shipment</div>
                  </li>
                  <li className={styles.li}>
                    <input type="checkbox" className={styles.checkbox} />
                    <div>Match with Description</div>
                  </li>
                </ul>
              )}
            </div>

            
          </div>
        )}
        <section>
          <div className={styles.reviewList_title}>Review Lists</div>
          <span>
            <div className={styles.reviewList_btns}>
              <button className={styles.reviewList_btn_active}>
                All Reviews
              </button>
              <button>With Photo & VIdeo</button>
              <button>With Description</button>
            </div>
            {screenWidth < 768 && (
              <i className={styles.filterIcn}>
                <BiFilterAlt />
              </i>
            )}
          </span>
          <div className={styles.review_boxes}>
            <div className={styles.review_box}>
              <div className={styles.stars}>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
              </div>
              <div className={styles.titleAnddate}>
                <p>This is amazing product I have.</p>
                <h1>July 2, 2020 03:29 PM</h1>
              </div>
              <div className={styles.reviewBox_end}>
                <span>
                  <img src={profileImg} />
                  <h1>Darrell Steward</h1>
                </span>
                <span>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-up"} ${
                        styles.like
                      }`}></i>
                    <h1>128</h1>
                  </button>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-down"} ${
                        styles.dislike
                      }`}></i>
                  </button>
                </span>
              </div>
            </div>
            <div className={styles.review_box}>
              <div className={styles.stars}>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
              </div>
              <div className={styles.titleAnddate}>
                <p>This is amazing product I have.</p>
                <h1>July 2, 2020 03:29 PM</h1>
              </div>
              <div className={styles.reviewBox_end}>
                <span>
                  <img src={profileImg} />
                  <h1>Darrell Steward</h1>
                </span>
                <span>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-up"} ${
                        styles.like
                      }`}></i>
                    <h1>128</h1>
                  </button>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-down"} ${
                        styles.dislike
                      }`}></i>
                  </button>
                </span>
              </div>
            </div>
            <div className={styles.review_box}>
              <div className={styles.stars}>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
              </div>
              <div className={styles.titleAnddate}>
                <p>This is amazing product I have.</p>
                <h1>July 2, 2020 03:29 PM</h1>
              </div>
              <div className={styles.reviewBox_end}>
                <span>
                  <img src={profileImg} />
                  <h1>Darrell Steward</h1>
                </span>
                <span>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-up"} ${
                        styles.like
                      }`}></i>
                    <h1>128</h1>
                  </button>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-down"} ${
                        styles.dislike
                      }`}></i>
                  </button>
                </span>
              </div>
            </div>
            <div className={`${styles.review_box} ${styles.review_box_last}`}>
              <div className={styles.stars}>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
                <i className={`${"fa-solid fa-star"} ${styles.star}`}></i>
              </div>
              <div className={styles.titleAnddate}>
                <p>This is amazing product I have.</p>
                <h1>July 2, 2020 03:29 PM</h1>
              </div>
              <div className={styles.reviewBox_end}>
                <span>
                  <img src={profileImg} />
                  <h1>Darrell Steward</h1>
                </span>
                <span>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-up"} ${
                        styles.like
                      }`}></i>
                    <h1>128</h1>
                  </button>
                  <button>
                    <i
                      className={`${"fa-regular fa-thumbs-down"} ${
                        styles.dislike
                      }`}></i>
                  </button>
                </span>
              </div>
            </div>
            <div className={styles.pagination}>
              <h1>1</h1>
              <h1>2</h1>
              <h1>...</h1>
              <h1>274</h1>
              <i
                className={`${"fa-solid fa-chevron-right"} ${
                  styles.angle
                }`}></i>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
