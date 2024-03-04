import img from "../../assets/pot_img_2.jpg";
import { FaStar } from "react-icons/fa";
const ProductsImg = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span> Product :</span> Product Name 
      </h1>

      <div className="row">
        <div className="video-container">
          <img src={img} />
        </div>

        <div className="content">
          <h3>Product Name</h3>
          <div className="mt-4">
            <span className="text-gray-700">Price: </span>
            <span className="text-xl font-semibold text-indigo-600">
            ₹ 99.99
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Availability: </span>
            <span className="text-green-600">In Stock</span>
          </div>
          <div className="mt-4">
            <div className="stars">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptates sed dolore exercitationem doloremque laudantium, facere
            atque error suscipit voluptatum minus, illum quos est consequuntur
            accusantium, libero necessitatibus ad fuga.
          </p>
          <a href="#" className="btn">
            Add To Card
          </a>
          <a href="#" className="btn">
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsImg;
