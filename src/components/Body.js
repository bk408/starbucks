import React from 'react';
import heroImg from "../img/home.png";
import { Link } from 'react-router-dom';



const Body = () => {
  return (
    <section className="hero-cont">
      <div className="hero-head">
        <span>Welcome To</span>
        <h1>Starbucks Coffee</h1>
        <h2>
          Free Coffee is a <br />
          tap away
        </h2>
        <Link to="" className='btn'>Join Now</Link>
      </div>
      <div className="hero-img">
        <img  alt="hero-img" src={heroImg} />
      </div>
    </section>
  );
}

export default Body