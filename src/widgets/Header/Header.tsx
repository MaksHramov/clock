import logo from '../../../public/Logo.svg'
import cart from '../../../public/cart.svg'
import styles from './Header.module.css'

function Header() {
    return ( 
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <img src={logo} alt="logo" />
                        </li>
                        <li>
                            <p className={styles["button-menu"]}>Меню</p>
                        </li>
                        <li>
                            <img src={cart} alt="cart" />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default Header;