import React from 'react';
import './locations.css';
import AYUK from "../../assets/AYUK.png";
import Douala from "../../assets/AYUK.png";
import Bamenda from "../../assets/AYUK.png";

const Locations = () => {
  return (
    <div className="location section__padding" id="locations">
      <div className="location-form">
        <div className='location-info'>
          <div className="image-container">
            <img src={AYUK} alt="Ulevus Logo" className="logo-image" />
            <h1>Arnold Sigala</h1>
            <h2>Creative Director, Ulevus</h2>
            <p>Creative Director, Ulevus</p>
          </div>
          <div className="image-container">
            <img src={AYUK} alt="Ulevus Logo" className="logo-image" />
            <h1>Arnold Sigala</h1>
            <h2>Creative Director, Ulevus</h2>
            <p>Creative Director, Ulevus</p>
          </div>
          <div className="image-container">
            <img src={AYUK} alt="Ulevus Logo" className="logo-image" />
            <h1>Arnold Sigala</h1>
            <h2>Creative Director, Ulevus</h2>
            <p>Creative Director, Ulevus</p>
          </div>
        </div>
      </div>
      <div className="gpt3__loc-sign">
        <a href="#">
          <button type="button">Register Here</button>
        </a>
      </div>
    </div>
  );
};

export default Locations;
