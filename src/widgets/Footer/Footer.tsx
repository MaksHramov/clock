import styles from './Footer.module.css'

function Footer() {
    return ( 
        <>
            <footer>
                <div className={styles["footer-container"]}>
                    <section className={styles["footer-container-section"]}>
                        <h2>KNOW WAYNE</h2>
                        <p>About Us</p>
                        <p>About Wayne Watch Store</p>
                        <p>Bulk Purchase & Corporate Gifts</p>
                    </section>
                    <section className={styles["footer-container-section"]}>
                        <h2>TERMS & CONDITIONS</h2>
                        <p>Shipping & Return Policies</p>
                        <p>Privacy Policy</p>
                        <p>FAQ’s</p>
                    </section>
                    <section className={styles["footer-container-section"]}>
                        <h2>CONTACT US</h2>
                        <div className={styles["footer-container-section-contacts"]}>
                            <p>Mail:</p>
                            <a href="mailto:example@mail.ru">example@mail.ru</a>
                        </div>
                        <div className={styles["footer-container-section-contacts"]}>
                            <p>Call:</p>
                            <a href="tel:89999999999">+79999999999</a>
                        </div>
                    </section>
                </div>
            </footer>
        </>
     );
}

export default Footer;