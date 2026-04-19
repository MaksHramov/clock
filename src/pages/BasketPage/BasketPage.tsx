import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import Card from "../../widgets/Card/Card";
import { useState } from "react";
import type { TClock } from "../../widgets/Card/type";
import ModalCard from "../../widgets/ModalCard/ModalCard";
import styles from './BasketPage.module.css'

function BasketPage() {
    const items = useSelector((state : RootState) => state.card);
    const [isModalItem, setIsModalItem] = useState<TClock | null>(null) 
    const sum = items.reduce((pervision, current) => pervision + current.price * current.count, 0)
    if(items.length ===0){
        return(<main>
                <div className="wrapper">
                    <h1>ПУСТО😭</h1>
                </div>
            </main>)
    }

    return ( 
        <>
            <main className={styles["basket"]}>
                <div className="wrapper">
                    <div className={styles["basket-page"]}>
                        {items.map(item => (
                            <Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} category={item.category} onClick={() => setIsModalItem(item)}/>
                        ))}
                    </div>

                    {isModalItem && (
                        <ModalCard 
                            {...isModalItem} 
                            onClose={() => setIsModalItem(null)}
                        />
                    )}
                    <div className={styles["basket-info"]}>
                        <p className={styles["basket-total"]}>Итог: {sum} ₽</p>
                        <button className={styles["checkout-btn"]}>
                            Оформить
                        </button>
                    </div>
                </div>
            </main>
        </>
     );
}

export default BasketPage;