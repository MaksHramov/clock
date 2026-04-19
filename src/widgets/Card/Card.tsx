import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import styles from "./Card.module.css";
import type { TClock } from "./type";
import { addToCard, deleteToCard } from "../../app/CardSlice";

function Card({id, title, image, price, onClick, description, category}: TClock) {

    const items = useSelector((state : RootState) => state.card);
    const cartItem = items.find(item => item.id === id);
    const dispatch = useDispatch();

  return (
    <div className={styles["card"]}>
      <img className={styles["card-img"]} src={image} alt={title} onClick={onClick}/>
      <div className={styles["card-container"]} onClick={onClick}>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-price"]}>{price}₽</div>
      </div>
      {cartItem ? 
      (<div className={styles["card-controls"]}>
        <div className={styles["card-btn"]} onClick={() => dispatch(deleteToCard({id, title, price, image, description, category}))}>-</div>
        <div className={styles["card-count"]}>{cartItem.count}</div>
        <div className={styles["card-btn"]} onClick={() => dispatch(addToCard({id, title, price, image, description, category}))}>+</div>
      </div>) 
      : <button className={styles["card-button"]} onClick={() => dispatch(addToCard({ id, title, price, image, description, category}))}>
            В корзину
        </button>}
    </div>
  );
}

export default Card;