import { useLocation } from "react-router-dom";
import "./product.css";
import Footer from "./Footer";

interface Item {
  id: number;
  name: string;
  price: number;
  title: string;
  image: string;
  category: string;
}

interface Props {
  addToCart: (product: Item) => void;
}

function Productdetail({ addToCart }: Props) {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <div className="container product-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-card">
            <div className="card product-card">
              <img
                className="img-fluid product-img"
                src={product.image}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-detail">
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
