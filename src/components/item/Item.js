

const Item = ({ name, img, price }) => {
    return (
        <li>
            <img src={ img} alt={ name }/>
            {name}
            {price}
            
            
        </li>
    )
}
export default Item