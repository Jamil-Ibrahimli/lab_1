
import styles from './cart.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Store/Store';
import Cart_item from '../Cart-Item/Cart_item';
import classNames from 'classnames';

const Cart = () => {

    const cart = useSelector((state: RootState) => state.addToCartReducer.items)
    const isActive = useSelector((state: RootState) => state.isActiveSliceReducer.isActive)

    return (

        <>

            <div className={classNames(styles['cart'], { [styles['cart-active']]: isActive })}>
                {cart.length === 0 ? <h2> Cart is empty </h2> : null}
                <div className={styles['cart_container']}>

                    {cart.map((item) => {

                        return <Cart_item key={item.id} item={item} />
                    }

                    )}

                </div>

            </div>

        </>

    )
}

export default Cart

