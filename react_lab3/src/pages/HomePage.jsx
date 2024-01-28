import React, { useState } from 'react'
import AnimalCart from '../compunents/AnimalCart'
import styles from './HomePage.module.scss'

const HomePage = () => {

    const animalNames = ['cat', 'bird', 'cow', 'dog', 'gator', 'horse']

    const [animal, setAnimal] = useState([])

    function getRandomImage() {

        return animalNames[Math.floor(Math.random() * animalNames.length)]

    }


    function handleSetAnimal() {

        setAnimal([...animal, getRandomImage()])


    }







    return (
        <>
            <div className={styles.home_button}><button onClick={handleSetAnimal}>Get Animal</button></div>
        <div className={styles.home_container}>{animal.map((item,index)=><AnimalCart title={item} key={index} />)} </div>  

        </>


    )

}

export default HomePage