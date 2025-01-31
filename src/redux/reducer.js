import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in the cart
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (exists) {
        // If it exists, increase the quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If not, add the product with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}

export default cartReducer;
