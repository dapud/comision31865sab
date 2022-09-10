import { useContext } from "react"
import CartContext from "../context/CartContext"


import { Link, useNavigate } from 'react-router-dom'

const CartWidget = () => {

   const {/* getCartQuantity, */ totalQuantity} = useContext (CartContext)

 /*   const totalQuantity = getCartQuantity() */
   console.log(totalQuantity)

   
    return (
        <div className="CarritoCompras" >
            <img  src='../images/carritoCompras.png' alt='cart-widget'/>
            {totalQuantity}
            
        </div>
        
        
    );
    
}
  
export default CartWidget