import { BsFillBagFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import "./card.css"

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
              <FaHeart className={isLiked ? "heart-icon active" : "heart-icon"}
              onClick={handleLikeClick}/>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;