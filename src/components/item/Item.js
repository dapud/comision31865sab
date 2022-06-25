
import { Link } from "react-router-dom"
import './Item.css'
import Counter from "../Counter/Counter"
import { useContext } from "react"
import { Context } from "../../App"

const Item = ({ id, name, img, price }) => { 

    /*  const context = useContext(Context)
        console.log(context)
 */
   /*     console.log(setCart)
   

    const handleAdd = (count) => {
      
            console.log(`se agregaron ${count} ${name} ${price} ${stock}`)
     
            setCart ({id, name, price, count})   }
 */
      
      
       
      


    return (
        <li className="containerCard">
            <div className="card">
                <div className="detalles">
                    
                    <p>{name}</p>
                    <p className="parrafo"> Precio: $  {price} </p>
                </div>

                <div className="imagen">
                    <img src={img} alt={name} />
                </div>

                <div className="button">

                    <Link className="parrafoCaracter" to={`/detail/${id}`}>Caracteristicas </Link>
                    
                   {/*  {<Counter initial={0} stock={20} onAdd={handleAdd}/>} */}
                    

                </div>
            </div>
        </li>
    )
}

export default Item

