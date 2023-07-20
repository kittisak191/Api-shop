import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import "./List";
import "./item.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Item() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const jsonData = await res.json();
        setData(jsonData);

        const uniqueCategories = [
          ...new Set(jsonData.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderSwiperSlides = (products) => {
    return products.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card item-card">
            <Link to={`/Productdetail/${product.id}`} state={{ product }}>
              <img className="img-fluid item-img" src={product.image} alt="" />
            </Link>
            <div className="item-detail">
              <p className="item-title">{product.title}</p>
              <p>ราคา : ฿ {product.price}</p>
              <p>{product.category}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="item-h2">{category}</h2>
          <Swiper
            spaceBetween={50}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {renderSwiperSlides(
              data.filter((product) => product.category === category)
            )}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default Item;
