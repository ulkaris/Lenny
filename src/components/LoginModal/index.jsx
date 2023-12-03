import styles from "./login-modal.module.scss";
import { Button } from "../../components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterModal, setRegisterModalExm } from "../../storee/reducers/counter/counterReducer";
import { setLoginModal } from "../../storee/reducers/counter/counterReducer";
import { fetchAuthLogin } from "../../storee/reducers/auth/authThunk";
import { setLogData } from "../../storee/reducers/auth/authReducer";

export const LoginModal = () => {

  function alertFunction(){
    alert("Oops! Something went wrong, try again");
    dispatch(setLogData());
  }

  const { logStatus } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const dispatchRegister = useDispatch();
  const dispatchLogin = useDispatch();

  const [logDatas, setLogDatas] = React.useState({
    identifier: "",
    password: "",
  });

  const [formErrors, setFormErrors] = React.useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
  const errors = {};

  if (!logDatas.identifier) {
    errors.identifier = "Phone Number or Email is required";
  } else {
    // Check if the identifier follows the specified format
    const emailRegex = /^[a-z][a-zA-Z0-9._%+-]*@(?:gmail\.com|mail\.ru)$/;

    if (!emailRegex.test(logDatas.identifier)) {
      errors.identifier = "Invalid email format";
    }
  }

  if (!logDatas.password) {
    errors.password = "Password is required";
  }

  if (Object.keys(errors).length === 0) {
    // No errors, submit the form
    dispatch(fetchAuthLogin(logDatas));
  } else {
    // There are validation errors, set them in the state
    setFormErrors(errors);
  }
  };

  const handleChanginValue = (e) => {
    setLogDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHaveAccount = () => {
    dispatchLogin(setLoginModal());
    dispatchRegister(setRegisterModal());
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.register_modal}>
        <div className={styles.title}>Sign In</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <div className={styles.inputTitle}>Email</div>
            <input
              name="identifier"
              className={styles.email}
              placeholder="Your Email"
              value={logDatas.email}
              onChange={handleChanginValue}
            />
             {formErrors.identifier && (
              <div className={styles.errorText}>{formErrors.identifier}</div>
            )}
          </div>
          <div className={styles.inputBox}>
            <div className={styles.inputTitle}>Password</div>
            <input
              name="password"
              type="password"
              className={styles.Password}
              placeholder="Your Password"
              value={logDatas.password}
              onChange={handleChanginValue}
            />
            {formErrors.password && (
              <div className={styles.errorText}>{formErrors.password}</div>
            )}
            <div className={styles.alreadySigned} onClick={handleHaveAccount}>
              Have you not got an account?
            </div>
          </div>
          <Button buttonTitle={"Sign In"} btnClass={styles.registerBtn} />
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

      {logStatus === 'error' && alertFunction()}
      {logStatus === 'success' && dispatch(setLoginModal(), dispatch(setRegisterModalExm()))}
    </div>
  );
};
