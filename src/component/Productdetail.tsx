import { useLocation } from "react-router-dom";
import "./product.css";
import Footer from "./Footer";

interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
}

interface Props {
  addToCart: (product: Product) => void;
}
function Productdetail({
  addToCart,
}: {
  addToCart: (product: Product) => void;
}) {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <div className="container product-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card product-card">
              <img
                className="img-fluid product-img"
                src={product.image}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-detail ">
              <h1 className="product-h1">{product.title}</h1>
              <h4 className="product-h4">{product.category}</h4>
              <p className="product-p">฿ {product.price}</p>
            </div>
            <button
              className="btn btn-dark btn-add"
              onClick={() => addToCart(product)}
            >
              เพิ่มสินค้า
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Productdetail;
