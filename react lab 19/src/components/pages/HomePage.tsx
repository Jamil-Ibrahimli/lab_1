
import React from 'react'
import Accordion from '../ui/Accordion'
import styles from './homePage.module.scss'
const HomePage = () => {

const datas=[

    {
      id:1,
title:'Jamil',
description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.'

},
{

    id:2,
title:'Uzeyir',
description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.'

},
{

    id:3,
title:'Ruslan',
description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.'

},
{

    id:4,
title:'Amil',
description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.n\
Lorem ipsum dolor sit amet consectetur adipisicing elit.'

}

]



  return (


    <div className={styles.container}>{datas.map((item)=>
    <Accordion key={item.id} title={item.title} description={item.description}/>)}</div>

  )
}

export default HomePage