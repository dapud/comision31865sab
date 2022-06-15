import Item from "../item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {
    return(
         <ul className=" listado">
            {products.map( prod => <Item key={prod.id} {...prod} />)}
        </ul>

    )

}

export default ItemList