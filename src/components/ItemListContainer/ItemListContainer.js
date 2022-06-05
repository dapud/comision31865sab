

import { useState, useEffect } from 'react'
import { getproducts } from "../../Asyncmock"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    const [products, setproducts] = useState([])

    useEffect(() =>{
        getproducts().then(Response => {
            setproducts(Response)

        })

    }, [])
   


    return (
        <div>
        <h1>{props.greeting} </h1>
        <ItemList products={ products }/> 
        </div>

    )
}
export  default ItemListContainer   