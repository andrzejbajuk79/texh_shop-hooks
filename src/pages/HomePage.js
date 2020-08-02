import React from 'react';
import {ProductState} from '../context/productContext';

const HomePage = props => {
  const {items} = ProductState();
  console.log(ProductState());

  return <>home page</>;
};

export default HomePage;
