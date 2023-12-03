import styles from "./profileBox.module.scss";

//imgs
import money from "../../assets/imgs/profile-icons/moneys.png";
import coin from "../../assets/imgs/profile-icons/coin.png";
import receipt from "../../assets/imgs/profile-icons/receipt-item.png";
import heart from "../../assets/imgs/profile-icons/heart.png";
import settings from "../../assets/imgs/profile-icons/setting-2.png";
import logout from "../../assets/imgs/profile-icons/logout.png";
import { useSelector, useDispatch } from "react-redux";
import { setToDefault } from "../../storee/reducers/auth/authReducer";
import { opposite } from "../../storee/reducers/counter/counterReducer";

export const ProfileBox = () => {
  const { userInfoUI } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(userInfoUI.user.username);
  const handleClick = () => {
    dispatch(setToDefault());
    dispatch(opposite());
  };

  let capitalLetter = userInfoUI?.user?.username?.slice(0,1);
  console.log(capitalLetter, 'capital letterr');

  return (
    <div className={styles.profileBox}>
      <div className={styles.start}>
        {/* <img src={profileImg} /> */}
        <div className={styles.profileImg}>{capitalLetter}</div>
        <div className={styles.nameBox}>
          <h1>{userInfoUI.user.username}</h1>
          <h2>Platinum Member</h2>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Wallet</div>
        <div className={styles.row}>
          <div className={styles.row_start}>
            <img src={money} />
            <h3>Lenny Balance</h3>
          </div>
          <div className={styles.balance}>$928,28</div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_start}>
            <img src={coin} />
            <h3>Lenny Coins</h3>
          </div>
          <div className={styles.balance}>0.092</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Menu</div>
        <div className={styles.row}>
          <div className={styles.row_start}>
            <img src={receipt} />
            <h3>Purchase</h3>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_start}>
            <img src={heart} />
            <h3>Wishlist</h3>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_start}>
            <img src={settings} />
            <h3>Settings</h3>
          </div>
        </div>
      </div>
      <div className={`${styles.box} ${styles.logoutBox}`}>
        <img src={logout} />
        <h4 onClick={handleClick}>Sign Out</h4>
      </div>
    </div>
  );
};
