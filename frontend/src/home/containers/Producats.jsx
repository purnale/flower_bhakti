import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const api = "http://localhost:8000/api/flowers";
const Producats = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFlowers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          latest <span>products</span>
        </h1>

        <box className="box-container">
          {flowers.map((flower, index) => (
            <div className="box" key={index}>
              <span className="discount">-{flower.discount}%</span>
              <div className="image">
                <img src={flower.imageURL} alt={flower.flowerTitle} />
                <div className="icons">
                  <a href="#" className="product_icon">
                    <FaHeart />
                  </a>
                  <a href="#" className="cart-btn">
                    add to cart
                  </a>
                  <a href="#" className="product_icon">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>{flower.flowerTitle}</h3>
                <div className="price">
                  ₹ {flower.price - flower.price * (flower.discount / 100)}{" "}
                  <span>₹ {flower.price}</span>
                </div>
              </div>
            </div>
          ))}
        </box>
      </section>
    </>
  );
};

export default Producats;
