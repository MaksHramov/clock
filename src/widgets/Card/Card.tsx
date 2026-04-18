import styles from "./Card.module.css";
import type { TClock } from "./type";

function Card({ title, image, price, description }: TClock) {
  return (
    <div className={styles["card"]}>
      <img className={styles["card-img"]} src={image} alt={title} />
      <div className={styles["card-container"]}>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-price"]}>{price}₽</div>
      </div>
      <p className={styles["card-description"]}>{description}</p>
      <button className={styles["card-button"]}>В корзину</button>
    </div>
  );
}

export default Card;