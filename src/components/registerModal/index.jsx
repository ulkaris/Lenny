import styles from "./register-modal.module.scss";
import { Button } from "../../components";
import React from "react";
import { fetchAuthRegister } from "../../storee/reducers/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterModal, setSuccessModal, setErrorModal} from '../../storee/reducers/counter/counterReducer';
import { setRegData } from "../../storee/reducers/auth/authReducer";

export const RegisterModal = () => {
  
  const { regStatus } = useSelector((state) => state.auth);
  console.log('register modalll');
  const dispatch = useDispatch();

  const [regDatas, setRegDatas] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(regDatas, 'regdatas');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthRegister(regDatas));
    dispatch(setRegisterModal());
    dispatch(setSuccessModal());
  };

  const handleChanginValue = (e) => {
    setRegDatas((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.register_modal}>
        <div className={styles.title}>Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <div className={styles.inputTitle}>Name</div>
            <input
              name="username"
              type="text"
              className={styles.name}
              placeholder="Your Name"
              value={regDatas.name}
              onChange={handleChanginValue}
            />
          </div>
          <div className={styles.inputBox}>
            <div className={styles.inputTitle}>Phone Number or Email</div>
            <input
              name="email"
              className={styles.email}
              placeholder="Phone Number or Email"
              value={regDatas.email}
              onChange={handleChanginValue}
            />
          </div>
          <div className={styles.inputBox}>
            <div className={styles.inputTitle}>Password</div>
            <input
              name="password"
              type="password"
              className={styles.Password}
              placeholder="Your Password"
              value={regDatas.password}
              onChange={handleChanginValue}
            />
          </div>
          <Button buttonTitle={"Sign Up"} btnClass={styles.registerBtn} />
        </form>
        <div className={styles.otherMethod_box}>
          <div className={styles.border}></div>
          <div className={styles.otherMethodMain}>Or using other method</div>
          <div className={styles.border}></div>
        </div>
        <div className={styles.facebook_box}>
          <i className={`${"fa-brands fa-facebook-f"} ${styles.facebook}`}></i>
          <h1>Sign Up with Facebook</h1>
        </div>
      </div>
      {regStatus== 'error' && dispatch(setErrorModal(),  dispatch(setRegData()))}
    </div>
  );
};
