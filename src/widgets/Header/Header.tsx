import { useSelector } from 'react-redux';
import logo from '../../../public/Logo.svg'
import cart from '../../../public/cart.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/store';

function Header() {
    const items = useSelector((state : RootState) => state.card);
    return ( 
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        </li>
                        <li>
                            <Link to="/catalog"> <p className={styles["button-menu"]}>Каталог</p></Link>
                        </li>
                        <li>
                        <Link to="/basket">
                            <img src={cart} alt="basket" />
                            <div className={styles["basket-length"]}>{items.length}</div>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default Header;