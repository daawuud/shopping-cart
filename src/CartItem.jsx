import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ item, amount: 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ item, amount: -1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
              <h3>{item.name}</h3>
              <p>Cost: {item.cost}</p>
              <div>
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartItem;
