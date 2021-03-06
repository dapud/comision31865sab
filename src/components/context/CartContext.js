import { useState, createContext, useEffect } from "react"

const CartContext = createContext ()

export const CartProvider =({children}) => {


    const [cart, setCart] = useState ([]) 
    const [ totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)


    useEffect(() => {


        let totalQuantity = 0

        cart.forEach (prod => {

            totalQuantity += prod.quantity
            
        })

        setTotalQuantity(totalQuantity)

    }, [cart])
    
   

    const addItem =(productToAdd) => {
     /*  if(!cart.some(prod => prod.id === productToAdd.id)){ */
        if(!isInCart (productToAdd.id)){
        setCart([ ...cart, productToAdd])

      }
   
    }

    

    const removeItem = (id) => {
        
        const cartwithoutProduct = cart.filter (prod => prod.id !== id)

        setCart (cartwithoutProduct)
    }

    const isInCart =(id) => {

        return cart.some (prod => prod.id === id)
    }
    
    const getCartQuantity = () => {

        let totalQuantity = 0

        cart.forEach (prod => {

            totalQuantity += prod.quantity
        })

        return totalQuantity 
    }



    return(

        <CartContext.Provider value={{
        cart,
        totalQuantity,
        addItem,
        removeItem,
        isInCart,
        /* getCartQuantity */
        
        
        }}>

        {children}


        </CartContext.Provider>

        



    )


}

export default CartContext