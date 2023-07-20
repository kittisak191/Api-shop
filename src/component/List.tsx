import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./list.css";

interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {}

interface ListProps {
  addToCart: (product: Product) => void; // Change to 'Product' type here
  cart: CartItem[];
  counts: number[];
  handleAddItem: (index: number) => void;
  handleDropItem: (index: number) => void;
  handleDelete: (index: number) => void;
}

function List({
  addToCart,
  cart,
  counts,
  handleAddItem,
  handleDropItem,
  handleDelete,
}: ListProps) {
  const handleAddToCart = (item: Product) => {
    addToCart(item);
  };

  const totalPricePerItem = cart.map(
    (item, index) => item.price * counts[index]
  );
  const total = totalPricePerItem.reduce((acc, price) => acc + price, 0);

  return (
    <div>
      <div>
        <div>
          <div className="container list-container">
            <h1 className="list-h1">ตะกร้าสินค้า</h1>
            <div className="row ">
              <div className="col-lg-8">
                {cart.map((item, index) => (
                  <div key={index} className="row mb-5 pb-3 list-row">
                    <div className="col-lg-6">
                      <div className="row">
                        <img
                          className="img-fluid list-img"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="list-item-details">
                        <p>{item.title}</p>
                      </div>
                      <div className="list-item-count">
                        <div className="list-item-money">
                          <p>฿ {item.price}</p>
                          <p>รวม ฿ {totalPricePerItem[index].toFixed(2)}</p>
                        </div>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            className="btn btn-dark btn-addcount border"
                            onClick={() => handleAddItem(index)}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="btn btn-white btn-count border"
                          >
                            {counts[index]}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-drop border"
                            disabled={counts[index] === 1}
                            onClick={() => handleDropItem(index)}
                          >
                            -
                          </button>
                        </div>
                        <div className="">
                          <button
                            type="button"
                            className="btn btn-danger btn-delete"
                            onClick={() => handleDelete(index)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4">
                <div className="card card-total">
                  <div className="">
                    <h2>สรุป</h2>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <p>ยอดรวม</p>
                    <p>฿ {total.toFixed(2)}</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <p>ยอดรวมทั้งหมด</p>
                    <p>฿ {total.toFixed(2)}</p>
                  </div>
                  <button className="btn btn-dark">
                    <Link className="btn-buy" to={`/Form/`}>
                      ชำระเงิน
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
