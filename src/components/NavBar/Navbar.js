import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const NavBar = () => {
    return(
    
        <nav className="NavBar">

            <Link to={'/'}>
               

                      <h1 className="Titulo"> Welldone Golf !!!</h1>
                       <h3> Todo para el golfista</h3>
                       
              

            </Link>

            <div className="CajaMenu ">

                     <Link to= '/category/Hierros'> Hierros </Link>
                     <Link to= '/category/Driver'>Driver</Link>
                     <Link to= '/category/Wedges'> Wedges</Link>
                     <Link to= '/category/Pelotas'> Pelotas </Link>
                     <Link to= '/category/Accesorios'>Accesorios </Link>
                       
            </div>

                         <div className="LogoCart">

                             <CartWidget  />
                             
                         </div>


          
        </nav>
        
        )
    }
    
    export default NavBar 