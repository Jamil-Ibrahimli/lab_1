import { FC } from 'react'
import styles from './card.module.scss'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/addToCartSlice';


export interface IProduct {

    id: number;
    title: string;
    image: string;
    count: number;
    price:number;

}

interface CardDataTypes {

    id: number;
    title: string;
    image: string;
    item: IProduct;
    price:number
}



const Card: FC<CardDataTypes> = ({ title, image, item }) => {

    const dispach = useDispatch()




    return (

        <>
            <div className={styles.card}>
                <div className={styles.card_title}>
                    <h3>{title}</h3>
                </div>


                <div className={styles.card_image}>
                    <img src={image} alt="img" />

                </div>

                <button onClick={() => dispach(addToCart(item))}>add</button>
            </div>
        </>

    )
}

export default Card