import axios from "axios";
import { useEffect, useState } from "react";
import {API_URL} from "../../api"
import type { TClock } from "../widgets/Card/type";
import Card from "../widgets/Card/Card";
import styles from './CatalogPage.module.css'

function CatalogPage() {
    const [clocks, setClocks] = useState<TClock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchClocks(){
            try{
                const responce = await axios.get(`${API_URL}/products`)
                setClocks(responce.data)
                setLoading(false);
            }
            catch(error){
                setError(error)
            }
        }
        fetchClocks();
    }, []);

    if(loading) return <h1>Загрузка...</h1>
    if(error) return <h1>Ошибка: {error}</h1>

    return ( 
        <>
            <main>
                <div className={styles["catalog-page"]}>
                {clocks.map(item => (
                        <Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} category={item.category}/>
                    ))}
                </div>
            </main>
        </>
     );
}

export default CatalogPage;