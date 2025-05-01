import React, { useEffect, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import { products } from '../constants/products';

const getFromLocalStorage = () => {
      const data = localStorage.getItem('cart');
      return data ? JSON.parse(data) : [];
};

const CartApp = () => {
      const [cart, dispatch] = useReducer(cartReducer, [], () => getFromLocalStorage());

      useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)) }, [cart]);

      const addToCart = (product) => { dispatch({ type: 'ADD_ITEM', payload: product }) };

      const increase = (id) => { dispatch({ type: 'INCREASE_QUANTITY', payload: id }) };

      const decrease = (id) => { dispatch({ type: 'DECREASE_QUANTITY', payload: id }); };

      const remove = (id) => { dispatch({ type: 'REMOVE_ITEM', payload: id }) };

      return (
            <div className="app-container">
                  <h2>Product List</h2>
                  <div className="product-list">
                        {products.map(product => (
                              <div key={product.id} className="product">
                                    <span>{product.name} - ${product.price}</span>
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                              </div>
                        ))}
                  </div>

                  <h2>Your Cart</h2>
                  <div className="cart-list">
                        {cart.length === 0 ? (
                              <p>Cart is empty.</p>
                        ) : (
                              cart.map(item => (
                                    <div key={item.id} className="cart-item">
                                          <span>{item.name} x {item.quantity}</span>
                                          <div>
                                                <button onClick={() => increase(item.id)}>+</button>
                                                <button onClick={() => decrease(item.id)}>-</button>
                                                <button onClick={() => remove(item.id)}>Remove</button>
                                          </div>
                                    </div>
                              ))
                        )}
                  </div>
            </div>
      );
};

export default CartApp;
