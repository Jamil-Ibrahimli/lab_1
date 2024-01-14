
import './button.css'

function Button(props) {
const{type}=props

  return (
    <button className={`btn ${type}`} >
      
    
      Click 
    </button>
  )
}

export default Button
