import React from 'react'
import styles from './card.module.scss'
interface IinputProps{

title?:string


}


const Card:React.FC <IinputProps>= ({title}) => {



  return (
    <div className={styles.title_card}>
      {title}

    </div>
  )
}

export default Card
