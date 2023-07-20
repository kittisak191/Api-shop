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
    <nav className="navbar navbar-expand-lg">
      <div className="container nav-container">
        <Link to="/" className="navbar-brand text-white">
          New Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav ms-auto me-auto">
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
          </div>
          <div className="shop ms-auto">
            <Link to="/List" className="nav-link">
              <FontAwesomeIcon className="nav-shop" icon={faCartShopping} />
              {itemCount}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
