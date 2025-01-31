// import React from 'react'
// import NavBar from './projectFolder/NavBar'

// import './App.css'
// import PostDisplay from './projectFolder/PostDisplay'

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <PostDisplay />
//     </div>
//   )
// }

// export default App

import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>E-Commerce App</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
