import logo from '../../../public/Logo.svg'
import cart from '../../../public/cart.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
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
                        <Link to="/basket"><img src={cart} alt="cart" /></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default Header;