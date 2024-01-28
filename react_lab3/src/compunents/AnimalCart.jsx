
import style from './animalCart.module.scss'
import { animalImages } from '../assets/images/Data'
import { useState } from 'react'

const AnimalCart = ({ title }) => {


    const[heartSize,setHeartSize]=useState(3)


function handleHeartSize(){

    setHeartSize(prev=>prev+3)


}


    return (

        <div className={style.animal_cart}>
            <img className={style['animal_cart_animal-img']} src={animalImages[title]} alt="animals" />
        <img className={style['animal_cart_heart-img']}src={animalImages.heart} alt="heart" onClick={handleHeartSize} style={{width:`${heartSize}rem`}} />
        
        
        </div>
    )
}

export default AnimalCart