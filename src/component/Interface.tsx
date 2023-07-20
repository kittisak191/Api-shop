import Footer from "./Footer";
import Item from "./Item";
import "./interface.css";

function Interface() {
  return (
    <div>
      <div className="container interface-container">
        <p className="text-center interface-p">NEW SHOP</p>
        <Item />
      </div>
      <Footer />
    </div>
  );
}

export default Interface;
