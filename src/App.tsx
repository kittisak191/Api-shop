import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import Interface from "./component/Interface";
import Productdetail from "./component/Productdetail";
import List from "./component/List";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    const updatedCounts = [...counts, 1];
    setCart(updatedCart);
    setCounts(updatedCounts);
    Swal.fire("เพิ่มสินค้าแล้ว", "You clicked the button!", "success");
  };

  const handleAddItem = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };

  const handleDropItem = (index) => {
    const updatedCounts = [...counts];
    if (updatedCounts[index] > 1) {
      updatedCounts[index] -= 1;
      setCounts(updatedCounts);
    }
  };

  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    const updatedCounts = [...counts];
    updatedCounts.splice(index, 1);
    setCart(updatedCart);
    setCounts(updatedCounts);
  };

  return (
    <Router>
      <Navbar counts={counts.length} />
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="about" element={<About />} />
        <Route
          path="/Productdetail/:id"
          element={<Productdetail addToCart={addToCart} />}
        />
        <Route
          path="/list"
          element={
            <List
              addToCart={addToCart}
              cart={cart}
              counts={counts}
              handleAddItem={handleAddItem}
              handleDropItem={handleDropItem}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
