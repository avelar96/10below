import Footer from './components/footer';
import NavBar from "./components/navBar";
import Catalog from './components/catalog';
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from "./components/admin";
import GlobalContext from './context/globalContext';

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <BrowserRouter>
          <NavBar></NavBar>

          <Route path="/" exact component={ Home} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/Admin" exact component = {Admin} />

          <Footer></Footer>
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
