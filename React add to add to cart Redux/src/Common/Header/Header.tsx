
import styles from './header.module.scss'
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { handleActive } from '../../Store/isActiveSlice';
import { RootState } from '../../Store/Store';
import { createRoot} from 'react-dom/client';
import { NavLink } from 'react-router-dom';
const Header = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.addToCartReducer.items)
    const totalCount = cart.reduce((acc, curr) => acc + curr.count, 0)
    return (

        <>
            <header className={styles.header}>

                <div className={styles.header_container}>
                    <h2> HeaderLogo</h2>

                    <nav className={styles.header_container_nav}>
                        <ul className={styles.header_container_nav_list}>
                            <li> <NavLink className={styles.link} to="/home">Home</NavLink> </li>
                            <li><NavLink className={styles.link} to="/contacts">Contacts</NavLink></li>
                            <li><NavLink className={styles.link} to="/about">About</NavLink></li>
                        </ul></nav>

                    <button className={styles['header_container_cart-button']}>

                        <TiShoppingCart className={styles.icon} onClick={

                            () => dispatch(handleActive())} />

                        {cart.length > 0 ? <span>{totalCount}</span> : null}


                    </button>


                </div>

            </header>
        </>

    )
}

export default Header