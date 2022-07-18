import { useState } from "react"
/* import Button from "../Button/Button"
 */


/* 
const Counter = ({initial, title, stock, onAdd}) => {

    const [count, setCount] = useState (initial)
     

   const decrement = () => { 
         if (count>0)
  
        setCount ( count - 1)
    }

    const increment = () => {
        if (count<stock)

        setCount  ( count + 1)
    }

    const reset = () => {

        setCount (initial)
    } */


    const ItemCount = ({title, stock = 0, initial = 1, onAdd})=> {
        const [quantity, setQuantity] = useState(initial)
     
        const increment = () => {
            if(quantity < stock) {
                setQuantity(quantity+1)
            }
        }
     
        const decrement = () => {
            if(quantity > 1) {
                setQuantity(quantity - 1)
            }     
        }
    

    return(
            <div>

                <h2> {title}</h2>

               <button onClick={decrement} > - </button> 
              
               <button onClick={increment} > + </button>
          
                <h2>{quantity}</h2>

                <button onClick={() => onAdd(quantity)} > Agregar al Carrito </button>
                
                

            </div>
              
    )

}

export default ItemCount
