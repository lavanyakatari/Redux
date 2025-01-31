// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './redux/counterSlice'
// import userReducer from './redux/userSlice'
// import commentReducer from './redux/commentSlice'

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         newSubscriber: userReducer,
//         newComments: commentReducer
//     },
// })
import { createStore } from "redux";
import cartReducer from "./reducer";

// Enable Redux DevTools Extension if available
const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
