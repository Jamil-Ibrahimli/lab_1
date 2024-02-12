import React, { useState } from 'react'
import styles from './birth.module.css'


const BirthDay = ({setDay,setMonth,setYear,handleAge}) => {



    function handleDay(e){
       
  

            const day=parseInt(e.target.value,10)
        
            setDay(day)
        

    
    }
   
  
    function handleMonth(e){



            const month=parseInt(e.target.value,10)
            setMonth(month)



    }

    function handleYear(e){



    const year = parseInt(e.target.value,10)

    setYear(year)

    }

       


  return (

    <>
    <div className={styles.birth}>

    <div className={styles.birth_info}>
<h2>Day</h2>
<input type="text"  className={styles.birth_info_inp} onChange={handleDay}/>

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