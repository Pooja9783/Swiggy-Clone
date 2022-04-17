import React from "react";
import "../Style/Carousel.css";
const Carousel = () => {
  return (
    <div>
      <div className="carousel-img">
        <div className="content-img">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rmu9xmyxpyc3iwgvh6u1"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/vbtk4vtyppjtsbxbyhim"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/bqbujnim4u2z713qhagy"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
