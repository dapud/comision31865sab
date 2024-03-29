/* import react, {useState, createContext} from 'react'  */
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { CartProvider} from './components/context/CartContext'

/* import Cart from './components/Cart/Cart'; */




function App() {

    


  return (

    <div className="App">

      <CartProvider>
      

     
              <BrowserRouter>
                         <NavBar />
              
                       <Routes className>
                  
                           <Route path ='/' element={ <ItemListContainer /> } />
                           <Route path ='/category/:categoryId' element={ <ItemListContainer /> } />
                           <Route path ='/detail/:productId' element={ <ItemDetailContainer  /> } />
                           <Route path ='/cart' element={<h1>CART</h1>}/>
                  
                         </Routes>
        
              
              </BrowserRouter>  

       </CartProvider>

      
         
    </div>
  );
}

export default App;
