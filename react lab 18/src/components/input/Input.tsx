import React from 'react'
import { TbMessageSearch } from "react-icons/tb";
import styles from './input.module.scss';


interface IinputProps{

setInp:(value:string)=>void;

}


const Input:React.FC <IinputProps> = ({setInp}) => {

    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{

        setInp(e.target.value)
        
        console.log(e.target.value)
        
        }
  return (

    <div className={styles.container}>
      <div className={styles.container_input}> 

      <input className={styles.container_input_item} type="text" placeholder={`search`} onChange={handleInput} />
      <TbMessageSearch className={styles.inp_icon}/> 
      
      </div>
     
    </div>

  )
}

export default Input
