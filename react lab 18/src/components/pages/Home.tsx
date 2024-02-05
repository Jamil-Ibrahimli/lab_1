import React, { useEffect, useState } from 'react'
import Input from '../input/Input'
import Card from '../card/Card'
import styles from './home.module.scss'



interface Ititle{

title?:string,
id?:number,


}


 const Home: React.FC <Ititle> = () => {

const[data,setData]=useState<Ititle[]>([])
const[inp,setInp]=useState('')



const fetchData=async()=>{
const res=await fetch('https://api.sampleapis.com/coffee/hot');
const json=await res.json()

setData(json)

}
 
useEffect(()=>{

fetchData()

},[]);



const filtered=data?.filter((item)=>item.title?.toLocaleLowerCase().includes(inp.toLocaleLowerCase().trim()))

console.log(filtered)

  return (
    <>
 <div className={styles.container}>

      <Input setInp={setInp}/>

     <div className={styles['container_title-box']}>

      
  
            {filtered?.map((item)=>  <div className={styles.container_title_card}><Card key={item.id} title={item.title}/></div>)}
            
         

     </div>

 </div>
    
    
    </>
  )
}
export default Home
