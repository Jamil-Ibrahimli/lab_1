import React, { useContext } from 'react'
import styles from './current.module.css'

import { dateValue } from '../Context'
 
const CurrentDate = () => {

const[days,months,years]=useContext(dateValue)



  return (
    <>
    
    <div className={styles.current}>

<p>Days:{days}</p>
<p>Months:{months}</p>
<p>Years:{years}</p>



    </div>
    
    </>
  )
}

export default CurrentDate