import styles from './button.module.scss';

export const Button = ({ children, btnClass, buttonTitle, onClick }) => {
  return (
    <button className={`${btnClass} ${styles.btn}`} onClick={onClick}>
      {children}
      {buttonTitle}
    </button>
  );
};
