import { useEffect } from 'react';
import type { TClock } from '../Card/type';
import styles from './ModalCard.module.css';

interface ModalCardProps extends TClock {
    onClose: () => void;
}

function ModalCard({title, image, price, description, category, onClose}: ModalCardProps) {

    useEffect(() => {
        const closeEscape = (e : KeyboardEvent) => {
            if(e.key === "Escape"){
                onClose();
            }
        }
        addEventListener("keydown", closeEscape)
    }, [onClose])

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
            <button className={styles["modal-button"]}>В корзину</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;