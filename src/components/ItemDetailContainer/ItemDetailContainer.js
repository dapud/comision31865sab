import {  useState, useEffect } from "react"
import { getProductById } from "../../Asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{

    const [product, setProduct] = useState()

        const {productId} = useParams() 
        

        useEffect (() => {
            getProductById (productId).then(response =>  {
                setProduct(response)
            })
    },[productId])
    
    
       return (
             <>
            <h1>Caracteristicas del Producto</h1>
            <ItemDetail {...product} /> 
        
             </>
    )
}

export default ItemDetailContainer