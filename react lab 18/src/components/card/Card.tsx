import React from 'react'
import styles from './card.module.scss'

interface CardDataTypes{

title:string,
key:number,
img:string
}


const Card:React.FC <CardDataTypes> = ({title,img}) => {
  return (
    <>
      <div className={styles.title_card}>

{title} <img src={img} alt="" />
     </div> 
    </>
  )
}

export default Card



