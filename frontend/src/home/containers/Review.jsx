import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import review1 from "../../assets/review_3.jpg";
import review2 from "../../assets/review_2.jpg";
import review3 from "../../assets/review_1.jpg";

const Review = () => {
  const review = [
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam maiores iusto laudantium blanditiis molestias, voluptas aboriosam veniam! Laudantium neque at vitae, quidem reiciendis natus quisquam sit dolor facilis quis.",
      name: "sarala purnale",
      status: "happy customer",
      img: review1,
    },
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam maiores iusto laudantium blanditiis molestias, voluptas aboriosam veniam! Laudantium neque at vitae, quidem reiciendis natus quisquam sit dolor facilis quis.",
      name: "supriya mule",
      status: "happy customer",
      img: review2,
    },
    {
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam maiores iusto laudantium blanditiis molestias, voluptas aboriosam veniam! Laudantium neque at vitae, quidem reiciendis natus quisquam sit dolor facilis quis.",
      name: "sarala purnale",
      status: "happy customer",
      img: review3,
    },
  ];

  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((data, index) => {
            const { para, name, status, img } = data;
            return (
              <>
                <div className="box" key={index}>
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
                  <p>{para}</p>
                  <div className="user">
                    <img src={img} alt={name} />
                    <div className="user-info">
                      <h3>{name}</h3>
                      <span>{status}</span>
                    </div>
                  </div>
                  <span>
                    <FaQuoteRight className="fa-quote-right" />
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Review;
