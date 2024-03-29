import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import BirthDay from './BirthDay';
import CurrentDate from './CurrentDate';
import {dateValue} from '../Context';
const Card = () => {


const[day,setDay]=useState("")
const[month,setMonth]=useState("")
const[year,setYear]=useState("")

const[currentDay,setCurrentDay]=useState(0)
const[currentMonth,setCurrentMonth]=useState(0)
const[currentYear,setCurrentYear]=useState(0)

const[years,setYears]=useState('')
const[months,setMonths]=useState('')
const[days,setDays]=useState('')




useEffect(()=>{


  const date = new Date();
  setCurrentDay(date.getDate());
  setCurrentMonth(date.getMonth()+1);
  setCurrentYear(date.getFullYear())


},[])




function handleAge(){
  const daysinMonth=new Date(currentYear,currentMonth,0).getDate()


 const daysInBirthMonth=new Date(year,month,0).getDate()
if(day==''||month==''||year==''){

alert('this field is required')
return
}
else if(isNaN(day)||isNaN(month)||isNaN(year)){

  alert("Shoud be only numbers")
  return
}
else if(day>daysInBirthMonth){

alert('Anvalid days in this month')
return

}
else if(year>currentYear||year==currentYear&&month===currentMonth&&day>currentDay){

alert('birthday can not be in the future')
return
}



setYears(currentYear-year)
setDays(currentDay-day)
setMonths(currentMonth-month)

if(currentMonth<month||currentMonth==month&&currentDay<day){

setYears(prev=>prev-1)
setMonths(prev=>prev+12)

}

if(currentDay<day){


setDays(prev=>prev+daysinMonth)
setMonths(prev=>prev-1)
}



}



  return (
    <>

<div className={styles.container}>
<div className={styles.card}>

<dateValue.Provider value={[days,months,years]}>

<BirthDay setDay={setDay} setMonth={setMonth} setYear={setYear} handleAge={handleAge}/>
<CurrentDate/>

</dateValue.Provider>



</div>


</div>


    </>
  )
}

export default Card
