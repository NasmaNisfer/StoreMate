
import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
import './Product.css';

function Products() {
  const [image, setImage] = useState(
    'https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
    
    

  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Replace the image URL with the desired image URLs in the array
      const images = [
        "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        "https://m.media-amazon.com/images/I/81NtrD+T6sL._AC_SX695_.jpg",
        "https://m.media-amazon.com/images/I/51s8yBzNHDL._AC_SY695_.jpg",
      ];
      const randomIndex = Math.floor(Math.random() * images.length);
      setImage(images[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="card-container">
        <section className="card">
          <img src={image} alt="shoe" className="card-img" />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del> $200
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;





