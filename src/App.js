import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideCart from './components/SideCart';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
