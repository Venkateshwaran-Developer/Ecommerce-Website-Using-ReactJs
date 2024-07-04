import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


function App() {
  const [cartItems , setCartItems] = useState([]);


  return (
      <div className="App">
        
        <Router>
          <div>
          <ToastContainer theme='light' position='top-center'/>
          <Header cartItems={cartItems}/>
          </div>
          <Routes>
          
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />}/>
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}/>
          </Routes>
        </Router>
        
        <Footer/>
      </div>
  );
}

export default App;



