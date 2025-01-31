import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                {item.name} - ${item.price} x {item.quantity}
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
