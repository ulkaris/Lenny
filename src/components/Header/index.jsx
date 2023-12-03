import styles from "./header.module.scss";
import "./headerIcons.scss";
import {
  ProfileBox,
  LoginModal,
  Logo,
  RegisterModal,
  SuccsessModal,
} from "../../components";
import React from "react";
import { getProductBoxes } from "../../api/products";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

//redux
import { useDispatch, useSelector } from "react-redux";
import { opposite } from "../../storee/reducers/counter/counterReducer";
import { getSearchValue } from "../../storee/reducers/counter/counterReducer";
import { useNavigate } from "react-router-dom";
import { setLoginModal } from "../../storee/reducers/counter/counterReducer";

export const Header = () => {
  //redux add to cart part
  const { cartArray } = useSelector((state) => state.cartData);
  const { searchValue} = useSelector(
    (state) => state.counter
  );

  const nav = useNavigate();
  //mobile desktop changes
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
  const isMobilePlaceholder = screenWidth <= 768;

  //cart
  function removeDuplicates(array, property) {
    const resultArray = [];
    const seen = new Map();

    for (const item of array) {
      const key = item[property];
      seen.set(key, item);
    }

    for (const item of seen.values()) {
      resultArray.push(item);
    }

    return resultArray;
  }

  const uniqueArray = removeDuplicates(cartArray, "id");
  let totalProducts = 0;
  uniqueArray.map((obj) => {
    totalProducts += obj.amount;
  });

  //search functionality
  //product boxes for search
  const [search, setSearch] = React.useState(false);
  const inputRef = React.useRef(null);
  const [productBoxes, setProductBoxes] = React.useState([]);

  React.useEffect(() => {
    async function getAllProductBoxes() {
      const data = await getProductBoxes();
      setProductBoxes(data);
    }

    getAllProductBoxes();
  }, []);
  const dispatchSearch = useDispatch();
  const results = productBoxes?.data?.data?.filter((obj) => {
    return (
      (searchValue &&
        obj?.attributes?.title?.toLowerCase().includes(searchValue)) ||
      obj?.attributes?.title?.includes(searchValue) ||
      obj?.attributes?.description?.includes(searchValue) ||
      obj?.attributes?.description?.toLowerCase().includes(searchValue)
    );
  });

  //click outside the search
  const searchRef = React.useRef(null);
  const resultRef = React.useRef(null);

  function showResults() {
    resultRef.current.style.display = "block";
  }
  React.useEffect(() => {
    function handleSearchClick(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        resultRef.current.style.display = "none";
      }
    }

    document.addEventListener("click", handleSearchClick);

    return () => {
      document.removeEventListener("click", handleSearchClick);
    };
  });

  //auth test
  const { token, logStatus, regStatus, userInfoUI } = useSelector(
    (state) => state.auth
  );

  const { profileModule, loginModal, registerModal, successModal } =
    useSelector((state) => state.counter);
  //profile modal and icon
  const dispatch = useDispatch();
  const handleProfileModule = () => {
    dispatch(opposite());
  };

  let capitalLetter = userInfoUI?.user?.username?.slice(0, 1);

  //register modal
  const [showContent, setShowContent] = React.useState(false);
  const dispatchLogin = useDispatch();

  const handleLoginModal = () => {
    dispatchLogin(setLoginModal());
    setShowContent(!showContent);
  };

  function closeEverything() {
    dispatchLogin(setLoginModal());
    setShowContent(!showContent);
  }

  return (
    <>
      <header>
        {!token && registerModal && <RegisterModal />}

        {regStatus == "success" && successModal && <SuccsessModal />}

        {loginModal && <LoginModal />}
        {profileModule && <ProfileBox />}
        {screenWidth >= 768 && <Logo />}
        <div className={styles.searchHolder} ref={searchRef}>
          <div className={styles.searchResult} ref={resultRef}>
            {results?.map((obj) => {
              return searchValue ? (
                <Link
                  to={`/product-detail/:${obj.id}`}
                  key={uuid()}
                  className={styles.link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                  <div key={obj.id} className={styles.searchResult_box}>
                    <div className={styles.imgBox}>
                      <img
                        src={`${import.meta.env.VITE_UPLOAD_IMG}${
                          obj.attributes?.img?.data?.attributes?.url
                        }`}
                      />
                    </div>
                    <div className={styles.result_titleImg}>
                      <div className={styles.resultTitle_Wrapper}>
                        <div className={styles.titleResult}>
                          {obj?.attributes?.title}
                        </div>
                      </div>
                      <div className={styles.priceResult}>
                        {`$${obj?.attributes?.price}`}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : null;
            })}
          </div>
          {screenWidth >= 768 && (
            <select
              name="AllCategories"
              id="AllCategories"
              className={styles.select}>
              <option value="All Categories">All Categories</option>
              <option value="saab">Saab</option>
            </select>
          )}
          <input
            onFocus={() => {
              setSearch(true);
            }}
            onBlur={() => {
              setSearch(false);
            }}
            onChange={(e) => {
              dispatchSearch(getSearchValue({ value: e.target.value }));
              showResults();
            }}
            ref={inputRef}
            type="search"
            id="search"
            name="search"
            placeholder={
              isMobilePlaceholder ? "Search product" : "Search on lenny..."
            }
            className={styles.search}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              inputRef.current.focus();
            }}></i>
        </div>
        <div className={styles.headerIconsSaver}>
          <div
            className={styles.cartHolder}
            onClick={() => {
              nav("/cart");
            }}>
            <i className="fa-solid fa-cart-shopping">
              {totalProducts > 0 && <div className={styles.cartNumber}>{totalProducts}</div>}
            </i>
          </div>
          {screenWidth < 992 && !search && <i className="fa-solid fa-bell"></i>}
          {screenWidth < 992 && !search && (
            <i className="fa-solid fa-envelope"></i>
          )}
          {screenWidth < 768 && (
            <i
              className="fa-solid fa-bars"
              onClick={
                logStatus == "success" ? handleProfileModule : handleLoginModal
              }></i>
          )}
          {logStatus == "success" && screenWidth >= 768 && (
            <div
              className={styles.profileImgSaver}
              onClick={handleProfileModule}>
              <div className={styles.profileImg}>{capitalLetter}</div>
            </div>
          )}
          {!token &&
            (logStatus == "" || logStatus == "error") &&
            screenWidth >= 768 && (
              <div className="faUserHolder" onClick={handleLoginModal}>
                <i className="fa-solid fa-user"></i>
              </div>
            )}
        </div>

        {(registerModal || loginModal || successModal) && showContent && (
          <div className={styles.ovarlay} onClick={closeEverything}></div>
        )}
      </header>
    </>
  );
};
