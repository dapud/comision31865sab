import { Link } from "react-router-dom"


const Item = ({id, name,  img, price }) => {
    
    return (
        
        <li>
            {name}

            
            
            <p> Precio: $  {price} </p>
           
            <Link to={`/detail/${id}`}>Caracteristicas </Link>
            <img src={ img} alt={ name }/>
            
            
            
           
            
            
            
        </li>
        
    )
    
    
    
}

export default Item