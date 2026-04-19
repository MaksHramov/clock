import styles from "./Card.module.css";
import type { TClock } from "./type";

function Card({ title, image, price, onClick }: TClock) {

  return (
    <div className={styles["card"]} onClick={onClick}>
      <img className={styles["card-img"]} src={image} alt={title} />
      <div className={styles["card-container"]}>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-price"]}>{price}₽</div>
      </div>
      <button className={styles["card-button"]}>В корзину</button>
    </div>
  );
}

export default Card;