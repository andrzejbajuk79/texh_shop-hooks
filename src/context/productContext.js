import React, {createContext, useContext, Component} from 'react';
import axios from 'axios';
import {items} from './productData';

const ProductContext = createContext();

export class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    items,
  };

  handleSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  };

  handleCart = () => {
    this.setState({cartOpen: !this.state.cartOpen});
  };

  closeCart = () => {
    this.setState({cartOpen: false});
  };

  openCart = () => {
    this.setState({cartOpen: true});
  };

  render() {
    const value = {
      ...this.state,
      handleSidebar: this.handleSidebar,
      handleCart: this.handleCart,
      closeCart: this.closeCart,
      openCart: this.openCart,
    };
    return (
      <ProductContext.Provider value={value}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductState = () => {
  return useContext(ProductContext);
};
