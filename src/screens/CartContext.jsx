import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        );
      } else {
        return [...prevItems, {...item, quantity: 1}];
      }
    });
  };

  const incrementQuantity = itemId => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decrementQuantity = itemId => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? {...item, quantity: Math.max(item.quantity - 1, 1)} // Ensure quantity does not go below 1
          : item,
      ),
    );
  };

  const removeItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        calculateTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};
