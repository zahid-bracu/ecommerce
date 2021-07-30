import { useState } from 'react';
import './App.css';
import NavbarMain from './component/Navbar/NavbarMain.js';
import Footer from './component/Footer/Footer';
 
import Home from './component/Home/Home';
import BannerOne from './component/Banner/BannerOne';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './component/Login/LoginPage';
import RegistrationPage from './component/Registration/RegistrationPage';
import ShopPage from './component/Shop/ShopPage';
import ViewDetails from './component/ViewDetails/ViewDetails';
import CartPage from './component/Cart/CartPage';
import ShippingAddress from './component/Shipping/ShippingAddress';
import PaymentPage from './component/Payment/PaymentPage';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import EditProfilePage from './component/Profile/EditProfile/EditProfilePage';
import OrderDetailPage from './component/OrderDetail/OrderDetailPage';
import BannerTwo from './component/Banner/BannerTwo';


function App() {
  const [state, setstate] = useState(false);
  function changeState(){
    setstate(!state);
  }
  console.log(state);
  return (
    <>
    <div className="">
    <Router>
    <NavbarMain state={state}  changeState={changeState}/>
         <Switch>
          

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/registration">
            <RegistrationPage/>
          </Route>

          <Route path="/shop">
            <ShopPage/>
          </Route>

          <Route path="/viewdetails">
            <ViewDetails/>
          </Route>


          <Route path="/shipping">
            <ShippingAddress/>
          </Route>

          <Route path="/cart">
            <CartPage/>
          </Route>

          <Route path="/payment">
            <PaymentPage/>
          </Route>

          <Route path="/placeorder">
            <PlaceOrder/>
          </Route>

          <Route path="/editprofile">
            <EditProfilePage/>
          </Route>


          <Route path="/orderdetail">
            <OrderDetailPage/>
          </Route>

          <Route path="/">
            <BannerOne/>
            <BannerTwo/>
            <Home/>
            
          </Route>

        </Switch>
        <Footer/>
    </Router>
    
    </div>
    
    </>
  );
}

export default App;
