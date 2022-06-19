
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Counter from './components/Counter/Counter';

function App() {

  /* const [cart, setCart] = useState ([]) */


  return (
    <div className="App">

       
 

         <BrowserRouter>
              <NavBar />
              
             <Routes className>
                  
                  <Route path ='/' element={ <ItemListContainer /> } />
                  <Route path ='/category/:categoryId' element={ <ItemListContainer /> } />
                  <Route path ='/detail/:productId' element={ <ItemDetailContainer /> } />
                  
              </Routes>
      
              
          </BrowserRouter>  
       
    </div>
  );
}

export default App;
