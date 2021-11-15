import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="lb_showcase_wrap">
      <div className="container">
        <div className="content">
          <p className="center lb_highlight ">Medical</p>
          <h2 className="center">Better Doctor </h2>
          <h2 className="center">Better Care</h2>
          <div className="center lb_showcase_btn_wrap">
            <span className="center lb_showcase_btn">Explore More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
