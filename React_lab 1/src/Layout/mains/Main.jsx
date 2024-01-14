


import Card from '../../components/card';



import './main.css'
const Main = () => {

const arr=[
{id:1,
title:'iphone9',
price:'900$',
color:'btn_second'},
{id:2,
  title:'Samsunq S10',
  price:'500$',
  color:'btn_third'},
  {id:3,
    title:'Xiaomi  10',
    price:'10000$',
    color:'btn_four'},
    {id:4,
      title:'Honor',
      price:'800$',
      color:'btn_five'},
      {id:5,
        title:'MacBook Pro',
        price:'2900$',
        color:'btn_six'},
        {id:6,
          title:'Lenovo',
          price:'1200$',
          color:'btn_seven'},
          {id:7,
            title:'Bosch',
            price:'900$',
            color:'btn_second'},
            {id:8,
              title:'Beko',
              price:'1500$',
              color:'btn_third'},
              {id:9,
                title:'Hp',
                price:'1000$',
                color:'btn_four'},
                {id:10,
                  title:'Sony',
                  price:'1800$',
                  color:'btn_five'},
                  {id:11,
                    title:'LG',
                    price:'2900$',
                    color:'btn_six'},
                    {id:12,
                      title:'Indesit',
                      price:'1800$',
                      color:'btn_seven'}
          

]

  return (
    <div className="main">
  
{arr.map((item)=><Card title={item.title} price={item.price} btnColor={item.color}/>)}
    </div>
  )
}

export default Main

