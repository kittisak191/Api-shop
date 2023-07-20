// import React, { createContext, useContext, useState } from "react";

// export const CartContext = createContext({
//   cart: [],
//   addToCart: () => {},
//   count: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(0);

//   const addToCart = (product) => {
//     setCart([...cart, { ...product }]);
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, count }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
