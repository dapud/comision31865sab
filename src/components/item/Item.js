import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id, name, img, price }) => {
    
   
    
   
    return (
        <div className="CardPrincipal">
        
                 <li className=" li_Cards">
                      <div className="CardsProductos">
                
                                {name}

                              <p className="Parrafos"> Precio: $  {price} </p>
           
                             <Link className="ParrafoCaracter" to={`/detail/${id}`}>Caracteristicas </Link>
                           <img className="imagenes" src={img} alt={ name }/>

                      </div>
         
            
                  </li>
        </div>
    )
  
   
    
}

export default Item