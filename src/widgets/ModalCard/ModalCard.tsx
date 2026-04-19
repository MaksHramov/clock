import { useEffect } from 'react';
import type { TClock } from '../Card/type';
import styles from './ModalCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, deleteToCard } from '../../app/CardSlice';
import type { RootState } from '../../app/store';

interface ModalCardProps extends TClock {
    onClose: () => void;
}

function ModalCard({id, title, image, price, description, category, onClose}: ModalCardProps) {

    useEffect(() => {
        const closeEscape = (e : KeyboardEvent) => {
            if(e.key === "Escape"){
                onClose();
            }
        }
        addEventListener("keydown", closeEscape)
    }, [onClose])

    const dispatch = useDispatch();
    const items = useSelector((state : RootState) => state.card);
    const cartItem = items.find(item => item.id === id);

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div className={styles["modal-card"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["modal-close"]} onClick={onClose}>✕</button>

        <div className={styles["modal-card-container"]}>
          <section className={styles["modal-image"]}>
            <img src={image} alt={title}/>
          </section>

          <section className={styles["modal-content"]}>
            <p className={styles["modal-category"]}>{category}</p>
            <h2 className={styles["modal-title"]}>{title}</h2>
            <p className={styles["modal-price"]}>{price}₽</p>
            <p className={styles["modal-description"]}>{description}</p>
            {cartItem ? 
            (<div className={styles["card-controls"]}>
                <div className={styles["card-btn"]} onClick={() => dispatch(deleteToCard({id, title, price, image}))}>-</div>
                <div className={styles["card-count"]}>{cartItem.count}</div>
                <div className={styles["card-btn"]} onClick={() => dispatch(addToCard({id, title, price, image}))}>+</div>
            </div>) 
            : <button className={styles["modal-button"]} onClick={() => dispatch(addToCard({ id, title, price, image }))}>
                    В корзину
                </button>}
          </section>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;