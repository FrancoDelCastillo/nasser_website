import React from 'react';
import './App.css';

//components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import WebsiteRights from "./components/WebsiteRights/WebsiteRights"

//pages
import Home from "./pages/HomePage/Home"
import AboutPage from "./pages/AboutPage/AboutPage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import HowToBuyPage from "./pages/HowToBuyPage/HowToBuyPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import Error404 from "./pages/error404.js"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>

      <Navbar/>

      <Switch>
      <Route path="/" exact component={Home}  />
        <Route path="/home" exact component={Home}  />
        <Route path="/acerca" component={AboutPage} />
        <Route path="/productos" component={ProductsPage} />
        <Route path="/como-comprar" component={HowToBuyPage} />
        <Route path="/contacto" component={ContactPage} />
      </Switch>

      <Footer/>

      <WebsiteRights/>

    </Router>
    </>
  );
}

export default App;
