import Counter from "../Counter/Counter"
import { useContext, useState } from "react"

import CartContext from "../context/CartContext"    

const ItemDetail = ({ description, img, id,    name, price, stock })  =>{

         const [countAdded, setCountAdded] = useState(0)
    
        const { addItem } = useContext (CartContext)
      
   

    const handleAdd = (count) => {
      
            console.log(`se agregaron ${count} ${name} ${price} ${stock}`)
     
            addItem ({ id, name, price, count}) 
            setCountAdded(count)


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


            
             {<Counter initial={0} stock={20} onAdd={handleAdd}/>} 
            
                    
                    
           
            
         </div>
     
)}
    
    





export default ItemDetail
