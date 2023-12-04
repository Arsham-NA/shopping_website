import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import Login from './components/login/login';
import Register from './components/register/register';
import Not_Found from './components/not_found/not_found';
import "./App.css";
import { useEffect, useState } from 'react';
import Context_Products from './contexts/products';
import Product from './components/product/product';
import { Context_Cart_Provider } from './contexts/cart';
import Products from './components/products/products';
import Dashbord from './components/dashbord/dashbord';
import About from './components/about/about';



const App = () => {
  const [products, setproducts] = useState([]);
  const [user_token, setuser_token] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setuser_token(null);
      console.log("No Token");
      return
    }

    else if (token){
      setuser_token("member ready");
      console.log("Yes Token");
    }
  },[]);

  return (
    <>
      <BrowserRouter>
        <Context_Products.Provider value={{products, setproducts}}>
        <Context_Cart_Provider>
          <Header user_token = {user_token}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:product_id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Not_Found />} />
          </Routes>
        </Context_Cart_Provider>
        </Context_Products.Provider>
      </BrowserRouter>

    </>
    
  )
}

export default App;