import styles from "./error-modal.module.scss";
import imgError from "../../assets/imgs/errorx.webp";
import { Button } from "../../components";

import { setLoginModal } from "../../storee/reducers/counter/counterReducer";
import { useDispatch } from "react-redux";

export const ErrorModal = () => {

  console.log("errorr modallll");
  const dispatchLogin = useDispatch();

  const handleClick = () => {
    dispatchLogin(setLoginModal());
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.register_modal}>
        <img src={imgError} />
        <h1>Oops! Error happened.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Velit ut ipsum tortor diam nec
          blandit ultrices et magna nisl eu.
        </p>
        <Button
          buttonTitle={"Sign In"}
          btnClass={styles.signInBtn}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
