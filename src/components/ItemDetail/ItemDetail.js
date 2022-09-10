import Counter from "../Counter/Counter"
import { useContext, useState } from "react"

import CartContext from "../context/CartContext"    
import { Link } from "react-router-dom"

const ItemDetail = ({ description, img, id, name, price, stock })  =>{

         const [quantityAdded, setQuantityAdded] = useState(0)
    
        const { addItem } = useContext (CartContext)

   

    const handleAdd = (quantity) => {
      
            console.log(`se agregaron ${quantity} ${name} ${price} ${stock}`)
     
            addItem ({ id, name, price, quantity}) 
            setQuantityAdded(quantity)


    }   
 
  
  
    return( 
              
        

        <div    style={{width: '50%', 
                       height: "auto",
                       display: "flex ", 
                       alignItems: 'center', 
                       backgroundColor: 'rgb(129 182 210)',
                       justifyContent: 'flex-end', 
                       fontsize: '20px', 
                       fontstyle: 'italic'}}>
       

            {description }  
            <img  src={img} alt={ img } style={{ align:'center',
                                                 width:'40%', 
                                                 height:'40%', 
                                                 margin: '15px', 
                                                 borderColor:' black'}} />


            {quantityAdded ===0
            ? <Counter initial={0} stock={20} onAdd={handleAdd}/>
            : <Link to='/cart'> terminar compra </Link>
             
             } 
            
                    
                    
           
            
         </div>
     
)}
    
    





export default ItemDetail
