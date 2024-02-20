import React, { useEffect, useState } from 'react'
import styles from './main.module.scss'
import Home from '../../Pages/Home/Home'
import axios from 'axios';



const Main = () => {

const[data,setData]=useState([]);

useEffect(()=>{

axios('https://fakestoreapi.com/products')

.then(res=>setData(res.data))

},[])

  return (

    <>


      <main className={styles.main}>

        <Home data={data}/>


      </main>



    </>


  )
}

export default Main