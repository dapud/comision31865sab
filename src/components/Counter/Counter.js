import { useState } from "react"
import Button from "../Button/Button"




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
    }

    

    return(
            <div>

                <h2> {title}</h2>

               <button onClick={decrement} > - </button> 
              
               <button onClick={increment} > + </button>
          
                <h2>{count}</h2>

                <button onClick={() => onAdd(count)} > Agregar al Carrito </button>
                
                

            </div>
              
    )

}

export default Counter
