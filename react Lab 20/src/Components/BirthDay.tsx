import React, { useState } from 'react'
import styles from './birth.module.css'


const BirthDay = ({setDay,setMonth,setYear,handleAge}) => {

const[isActiveDay,setIsActiveDay]=useState('')
const[isActiveMonth,setIsActiveMonth]=useState(false)
const[isActiveYear,setIsActiveYear]=useState(false);

    function handleDay(e){
       
        if(e.target.value<31){

            const day=parseInt(e.target.value,10)
        
            setDay(day)}
        


        else if (e.target.value>31){

            setIsActiveDay('Must be Valid number')
        }
    else{

setIsActiveDay('Should be only number')

    }
    
    
    }
   
  
    function handleMonth(e){

        if(e.target.value<12){

            const month=parseInt(e.target.value,10)
            setMonth(month)

        }
        else{alert('Enter valid number')}

    }

    function handleYear(e){
const currYear= new Date

if(e.target.value<currYear.getFullYear()){


    const year = parseInt(e.target.value,10)

    setYear(year)

}else{

alert('Not Valid')
return
}

       

    }

  return (


    <>

    <div className={styles.birth}>

    <div className={styles.birth_info}>
<h2>Day</h2>
<input type="text"  className={styles.birth_info_inp} onChange={handleDay}/>
<p>{isActiveDay}</p>
</div>
<div className={styles.birth_info}>
<h2>Months</h2>
<input type="text" className={styles.birth_info_inp} onChange={handleMonth}/>
</div>
<div className={styles.birth_info}>
<h2>Year</h2>
<input type="text" className={styles.birth_info_inp} onChange={handleYear}/>
</div>
    
<button onClick={handleAge}>click</button>
    </div>

    </>

  )
}

export default BirthDay