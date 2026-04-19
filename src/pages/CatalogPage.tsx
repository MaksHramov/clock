import axios from "axios";
import { useEffect, useState } from "react";
import {API_URL} from "../../api"
import type { TClock } from "../widgets/Card/type";
import Card from "../widgets/Card/Card";
import styles from './CatalogPage.module.css'
import ModalCard from "../widgets/ModalCard/ModalCard";

function CatalogPage() {
    const [clocks, setClocks] = useState<TClock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)
    const [isModalItem, setIsModalItem] = useState<TClock | null>(null)
    const [search, setSearch] = useState<string>("");

    const searchClock = clocks.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        async function fetchClocks(){
            try{
                const response = await axios.get(`${API_URL}/products`)
                setClocks(response.data)
                setLoading(false);
            }
            catch(error){
                setError(error)
                setLoading(false);
            }
        }
        fetchClocks();
    }, []);

    if(loading) return <h1>Загрузка...</h1>
    if(error) return <h1>Ошибка: {error}</h1>

    return ( 
        <>
            <main>
                <div className={styles["catalog-search"]}>
                    <div className={styles["search-box"]}>
                        <input className={styles["search-input"]} type="text" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles["catalog-page"]}>
                    {searchClock.map(item => (
                        <Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} category={item.category} onClick={() => setIsModalItem(item)}/>
                    ))}
                </div>

                {isModalItem && (
                    <ModalCard 
                        {...isModalItem} 
                        onClose={() => setIsModalItem(null)}
                    />
                )}
            </main>
        </>
     );
}

export default CatalogPage;