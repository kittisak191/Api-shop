import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbar.css";

interface Props {
  counts?: number;
}
function Navbar(props: Props) {
  const itemCount = props.counts ? (
    <span className="item-count">{props.counts}</span>
  ) : null;
  return (
    <div>
      <nav
        className="navbar navbar-dark  navbar-expand-lg"
        aria-label="Third navbar example"
      >
        <div className="container ">
          <span className="navbar-brand ">New Shop</span>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="collapse navbar-collapse " id="navbarsExample03">
            <ul className="navbar-nav ms-auto me-auto">
              <Link to="/" className="nav-link" aria-current="page">
                หน้าแรก
              </Link>
              <Link to="/about" className="nav-link">
                เกี่ยวกับ
              </Link>
              <Link to="/Form" className="nav-link">
                การชำระเงิน
              </Link>
              <Link to="/contact" className="nav-link">
                ติดต่อเรา
              </Link>
              <span className="shop">
                <Link to="/List" className="nav-link ">
                  <FontAwesomeIcon className="nav-shop" icon={faCartShopping} />
                  {itemCount}
                </Link>
              </span>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
