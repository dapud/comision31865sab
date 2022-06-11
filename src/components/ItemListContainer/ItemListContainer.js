

import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../Asyncmock"
import ItemList from '../ItemList/ItemList'
import {  useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    

    useEffect(() =>{
        setLoading (true)

        if(!categoryId) {

            getProducts().then(prods => {
                setProducts(prods)
    
            }).finally(() => {
                setLoading (false)
            })
        } else {

            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
    
            }).finally(() => {
                setLoading (false)
            })
        }

      

    }, [categoryId])
   
    if (loading) {

        return  <h1>Cargando...</h1>
    }

    return (
        <div>
        <h1>{props.greeting} </h1>
        <ItemList products={ products }/> 
        </div>

    )
}
export  default ItemListContainer   