import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import Cart from './pages/Cartpage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/Default';

const routes = props => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:id">
        <SingleProduct />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="*">
        <Default />
      </Route>
    </Switch>
  );
};

export default routes;
