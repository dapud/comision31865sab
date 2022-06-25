import { useContext } from "react"
import CartContext from "../context/CartContext"




const CartWidget = () => {

   const {getCartQuantity, totalQuantity} = useContext (CartContext)

   /* const totalQuantity = getCartQuantity() */

    
    return (
        <div className="CarritoCompras" >
            <img  src='../images/carritoCompras.png' alt='cart-widget'/>
            {totalQuantity}
        </div>
    );
}

export default CartWidget