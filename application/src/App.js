import logo from './logo.svg';
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


function App() {
  return (
    <div>

    
    
    

    <Router>
    <NavbarMain/>
         <Switch>
          

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/">
            <BannerOne/>
            <Home/>
          </Route>

        </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
