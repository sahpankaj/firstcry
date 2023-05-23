
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FirstNavBar from './components/navbar/FirstNavBar';
import MainNavBar from './components/navbar/MainNavBar';
import MyMenu from './components/navbar/DemoCode';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductsDetails';
import CartData from './components/cart/CartData';
import LoginSingUp from './components/Form/LoginSingUp';
import Login from './components/Form/Login';

function App() {
  return (
    <div className="App">
    <FirstNavBar/>
    <MainNavBar/>
    {/* <LoginSingUp/> */}
      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='products/:id' element = {<ProductsDetails/>}/>
        <Route path='cart' element = {<CartData/>}/>
        <Route path='login' element = {<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
