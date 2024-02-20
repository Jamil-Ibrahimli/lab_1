
import { FC } from 'react';
import { IProduct } from '../Card/Card';
import styles from './cart_item.module.scss';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Store/addToCartSlice';

interface ICartItem {

    item: IProduct;

}



const Cart_item: FC<ICartItem> = ({ item }) => {

    const dispatch = useDispatch()

    return (

        <>
            <div className={styles['cart-item']}>
                <div className={styles['cart-item_image']}> <img src={item.image} alt="product" /> </div>

                <div className={styles['cart-item_title']}> <p>{item.title}</p> </div>

                <div className={styles['cart-item_buttons']}>
                    <p><RiDeleteBin6Fill className={styles.delete} onClick={() => dispatch(removeItem(item))} /></p>


                </div>
            </div>
        </>

    )
}

export default Cart_item