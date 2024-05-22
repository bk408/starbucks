import React from "react";
import shop1 from "../img/shop1.png";
import shop2 from "../img/shop2.png";
import shop3 from "../img/shop3.png";
import "boxicons";

const Shop = () => {
  return (
    <section className="shop">
      <div className="heading">
        <span>Shop Now</span>
        <h1>Shop Coffee</h1>
      </div>

      <div className="shop-container">
        <div className="box">
          <div className="box-img">
            <img alt="shop1" src={shop1} />
          </div>
          <div className="stars">
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>

            <box-icon color="white" name="star-half" type="solid"></box-icon>
          </div>
          <h2>Starbucks Coffee</h2>
          <span>$ 12.4</span>
          <button className="btn">Order Now</button>
        </div>

        <div className="box">
          <div className="box-img">
            <img alt="shop2" src={shop2} />
          </div>
          <div className="stars">
            <box-icon
              color="white"
              // animation = "tada"
              name="star"
              type="solid"
            ></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
          </div>
          <h2>Starbucks Coffee</h2>
          <span>$ 15.5</span>
          <button className="btn">Order Now</button>
        </div>

        <div className="box">
          <div className="box-img">
            <img alt="shop3" src={shop3} />
          </div>
          <div className="stars">
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>
            <box-icon color="white" name="star" type="solid"></box-icon>

            <box-icon color="white" name="star-half" type="solid"></box-icon>
          </div>
          <h2>Starbucks Coffee</h2>
          <span>$ 14.4</span>
          <button className="btn">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
