import './card.css';
import Button from './Button';

function Card(props) {
    console.log(props)


const{title,price,btnColor}=props

  return (
    <div className='card'>
     <h2>{title}</h2>
     <p>{price}</p>

    <Button type={btnColor}/>

    </div>
  )
}

export default Card
