import styles from "./product-detail.module.scss";
import react from "react";
import logo from "../../assets/imgs/merchantLogo.png";
import { Button, ProductBox, ReviewStatic } from "../../components";
import { ProductDetailHead } from "../../store/Product-Detail-head";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { handleRelated } from "../../storee/reducers/relatedProduct/relatedThunk";

//route
import { Link } from "react-router-dom";

export const ProductDetail = () => {

  react.useEffect(() => {
   setProductDetail(true);
  }, []);

  //productDetail
  const [productDetail, setProductDetail] = react.useState(false);

  const handleProductDetail = () => {
    setProductDetail(true);
    setMerchant(false);
    setRelated(false);
    setReviews(false);
  };

  //Merchant
  const [merchant, setMerchant] = react.useState(false);

  const handleMerchant = () => {
    setMerchant(true);
    setProductDetail(false);
    setRelated(false);
    setReviews(false);
  };

  //Merchant
  const [reviews, setReviews] = react.useState(false);

  const handleReviews = () => {
    setReviews(true);
    setMerchant(false);
    setProductDetail(false);
    setRelated(false);
  };

  //realted
  const [related, setRelated] = react.useState(false);

  const handleRelatedUI = () => {
    setRelated(true);
    setReviews(false);
    setMerchant(false);
    setProductDetail(false);
  };

  //related products
  const dispatch = useDispatch();
  const { relatedProducts, loading } = useSelector((state) => state.related);
  react.useEffect(() => {
    dispatch(handleRelated(4));
  }, []);
  const relatedProductsData = relatedProducts || [];

  //not found
  const { id: productId } = useParams();
  const bestId = productId.slice(1);

  if(bestId > 45){
    return <h1 className={styles.notFound}>Product not found</h1>
  }

  return (
    <section className={styles.productDetail}>
      <ProductDetailHead />
      <div className={styles.productInfos}>
        <div
          className={
            productDetail
              ? styles.productInfos_slide_active
              : styles.productInfos_slide
          }
          onClick={handleProductDetail}>
          Detail
        </div>
        <div
          className={
            merchant
              ? styles.productInfos_slide_active
              : styles.productInfos_slide
          }
          onClick={handleMerchant}>
          Merchant
        </div>
        <div
          className={
            reviews
              ? styles.productInfos_slide_active
              : styles.productInfos_slide
          }
          onClick={handleReviews}>
          Reviews
        </div>
        <div
          className={
            related
              ? styles.productInfos_slide_active
              : styles.productInfos_slide
          }
          onClick={handleRelatedUI}>
          Related
        </div>
      </div>
      {productDetail && (
        <div className={styles.pdBox}>
          <div className={styles.pdTitle}>
            G502 X Lightspeed WirelessGaming Mouse
          </div>
          <div className={styles.pdContent}>
            G502 X LIGHTSPEED is the latest addition to legendary G502 lineage.
            Featuring our first-ever LIGHTFORCE hybrid optical-mechanical
            switches and updated LIGHTSPEED wireless protocol with 68% faster
            response rate.
          </div>
          <div className={styles.pdMain}>
            <div className={styles.pdMain_box}>
              <div className={styles.pdMain_box_title}>Specification</div>
              <table>
                <tr className={styles.grayRow}>
                  <td className={styles.paleType}>Brand</td>
                  <td className={styles.darkType}>Logitech</td>
                </tr>
                <tr className={styles.whiteRow}>
                  <td className={styles.paleType}>Type</td>
                  <td className={styles.darkType}>Wired</td>
                </tr>
                <tr className={styles.grayRow}>
                  <td className={styles.paleType}>Resolution</td>
                  <td className={styles.darkType}>100-25600 dpi</td>
                </tr>
                <tr className={styles.whiteRow}>
                  <td className={styles.paleType}>Max Speed</td>
                  <td className={styles.darkType}>40G2</td>
                </tr>
                <tr className={styles.grayRow}>
                  <td className={styles.paleType}>Max Acceleration</td>
                  <td className={styles.darkType}>300 IPS</td>
                </tr>
              </table>
            </div>
            <div className={styles.pdMain_box}>
              <div className={styles.pdMain_box_title}>In The Box</div>
              <div className={styles.itb}>
                <div className={styles.itb_row}>
                  <div className={styles.tickBox}>
                    <i className={`${"fa-solid fa-check"} ${styles.tick}`}></i>
                  </div>
                  <h1>UG502 X LIGHTSPEED Wireless Gaming Mouse</h1>
                </div>
                <div className={styles.itb_row}>
                  <div className={styles.tickBox}>
                    <i className={`${"fa-solid fa-check"} ${styles.tick}`}></i>
                  </div>
                  <h1>DPI-Shift button cover</h1>
                </div>
                <div className={styles.itb_row}>
                  <div className={styles.tickBox}>
                    <i className={`${"fa-solid fa-check"} ${styles.tick}`}></i>
                  </div>
                  <h1>USB-C charging cable</h1>
                </div>
                <div className={styles.itb_row}>
                  <div className={styles.tickBox}>
                    <i className={`${"fa-solid fa-check"} ${styles.tick}`}></i>
                  </div>
                  <h1>LIGHTSPEED USB-A receiver</h1>
                </div>
                <div className={styles.itb_row}>
                  <div className={styles.tickBox}>
                    <i className={`${"fa-solid fa-check"} ${styles.tick}`}></i>
                  </div>
                  <h1>USB extension cable</h1>
                </div>
                <div className={styles.itb_row}>
                  <div className={styles.tickBox}>
                    <i className={`${"fa-solid fa-check"} ${styles.tick}`}></i>
                  </div>
                  <h1>User Documentation</h1>
                </div>
              </div>
            </div>
            <div className={styles.pdMain_box}>
              <div className={styles.pdMain_box_title}>System Required</div>
              <ul>
                <li>- USB port </li>
                <li>- Internet access for optional software download</li>
                <li>- Windows® 10 or later</li>
                <li>- macOS 10.14 or later</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {merchant && (
        <div className={styles.merchantBox}>
          <div className={styles.merchantBox_title}>Merchant Information</div>
          <div className={styles.merchantBox_main}>
            <div className={styles.merchantBox_main1}>
              <img src={logo} />
              <div className={styles.merchantBox_main1_part}>
                <h1>Logitech Indonesia</h1>
                <h2>Jakarta Pusat</h2>
                <div className={styles.greenbtns}>
                  <div className={styles.greenBtn}>Top Rated Merchant</div>
                  <div className={styles.greenBtn}>Best Merchant</div>
                </div>
              </div>
            </div>
            <div className={styles.merchantBox_main2}>
              <button>
                <i
                  className={`${"fa-regular fa-comment-dots"} ${
                    styles.chat
                  }`}></i>
                <div>Chat</div>
              </button>
              <button>
                <i className={`${"fa-solid fa-store"} ${styles.store}`}></i>
                <div>Visit Merchant</div>
              </button>
            </div>
          </div>
        </div>
      )}
      {reviews && <ReviewStatic />}
      {related && (
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
      )}
    </section>
  );
};
