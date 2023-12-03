import styles from './succsess-modal.module.scss';
import imgSuccsess from '../../assets/imgs/tick-circle.png'
import {Button} from '../../components';

import {setLoginModal} from "../../storee/reducers/counter/counterReducer";
import {setSuccessModal} from "../../storee/reducers/counter/counterReducer";
import { useDispatch } from "react-redux";


export const SuccsessModal = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSuccessModal());
    dispatch(setLoginModal());
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.register_modal}>
        <img src={imgSuccsess} />
        <h1>Create Account Successfull!</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Velit ut ipsum tortor diam nec blandit ultrices et magna nisl eu.</p>
        <Button buttonTitle={'Sign In'} btnClass={styles.signInBtn} onClick={handleClick}/>
      </div>
    </div>
  );
};