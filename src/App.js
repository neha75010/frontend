
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Shop from './Screens/Shop';
import ShopCategory from './Screens/ShopCategory';
import Product from './Screens/Product';
import Cart from './Screens/Cart';
import LoginSignUp from './Screens/LoginSignUp';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/product/:_id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
