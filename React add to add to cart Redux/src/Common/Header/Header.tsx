
import styles from './header.module.scss'
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { handleActive } from '../../Store/isActiveSlice';
const Header = () => {
    const dispatch = useDispatch()

    return (

        <>
            <header className={styles.header}>

                <div className={styles.header_container}>
                    <h2> HeaderLogo</h2>

                    <nav className={styles.header_container_nav}>
                        <ul className={styles.header_container_nav_list}>
                            <li>Home</li>
                            <li>Contacts</li>
                            <li>Wish-list</li>
                        </ul></nav>

                    <TiShoppingCart className={styles['header_container_cart-icon']} onClick={
                        () => dispatch(handleActive())} />

                </div>

            </header>
        </>

    )
}

export default Header