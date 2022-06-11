import { Link } from "react-router-dom"

const NavBar = () => {
    return(
    
        <nav className="NavBar">

            <Link to={'/'}>
            <h1> Welldone Golf</h1>
            </Link>
            
            <Link to= '/category/Hierros'> Hierros </Link>
            <Link to= '/category/Driver'>Driver</Link>
            <Link to= '/category/Wedges'> Wedges</Link>
            <Link to= '/category/Pelotas'> Pelotas </Link>
            <Link to= '/category/Accesorios'>Accesorios </Link>
        </nav>
        
        )
    }
    
    export default NavBar 