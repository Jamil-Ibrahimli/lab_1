import { FC } from 'react'
import Card from '../../Components/Card/Card'
import styles from './home.module.scss'
import Cart from '../../Components/Cart/Cart'



interface HomeDataTypes {
    data?: any[]

}


const Home: FC<HomeDataTypes> = ({ data }) => {


    return (
        <>
            <div className={styles.container}>

                {data?.map((item) =>
                    <Card title={item.title}

                        key={item.id}

                        item={item}

                        image={item.image}

                        id={item.id}

                        price={item.price}

                    />


                )}


            </div>

            <Cart />

        </>


    )
}

export default Home