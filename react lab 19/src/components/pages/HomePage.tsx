
import React, { useEffect, useState } from 'react';
import Accordion from '../ui/Accordion';
import styles from './homePage.module.scss';


interface HomePageDataTypes{

id:number,
title:string,
description:string,

}



const HomePage:React.FC<HomePageDataTypes> = () => {

const[datas,setDatas]=useState<HomePageDataTypes[]>([])


async function fetchingDatas(){

const res=await fetch('https://api.sampleapis.com/coffee/hot');

const json = await res.json()

setDatas(json)

}


useEffect(()=>{

fetchingDatas()

},[])


// "First, I was using static defined an array of objects.
// later I decided to fetch data from an API to make the application more dynamic and challenging." 


  return (


    <div className={styles.container}>{datas.slice(0,7).map((item)=>
    <Accordion key={item.id} title={item.title} description={item.description}/>)}</div>

  )
}

export default HomePage