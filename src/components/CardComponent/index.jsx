import styles from './card.module.scss';

export const CardComponent = ({img, date, title, content}) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgHolder}><img src={img} /></div>
        <div className={styles.card_date}>{date}</div>
        <div className={styles.card_title}>{title}</div>
        <div className={styles.card_content}>{content}</div>
    </div>
  )
}
