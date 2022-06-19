
import { Link } from "react-router-dom"
import './Item.css'
import Counter from "../Counter/Counter"

const Item = ({ id, name, img, price }) => {




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
                   
                    <Counter initial={0}   stock ={10}   />

                </div>
            </div>
        </li>
    )
}

export default Item

