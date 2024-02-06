import React, { useEffect, useState } from 'react'
import Input from '../input/Input'
import Card from '../card/Card'
import styles from './home.module.scss'

interface HomeDataTypes{
title:string,
id:number,
image:string

}


const Home:React.FC <HomeDataTypes>= () => {

const[data,setData]=useState<HomeDataTypes[]>([])
const[inp,setInp]=useState('')

async function dataFetching(){

const res=await fetch('https://api.sampleapis.com/coffee/hot');
const json=await res.json()

setData(json)

}

useEffect(()=>{

dataFetching()

},[])


const filtered=data?.filter((item)=>item.title.toLocaleLowerCase().includes(inp.toLocaleLowerCase().trim()))



  return (
    <>
     <div className={styles.container}>

     <Input setInp={setInp}/>

    <div className={styles['container_title-box']}>

      
{filtered.map((item)=> <Card title={item.title} key={item.id} img={item.image} />)}

            
        
    </div>

</div>
      
    </>
  )
}

export default Home





























