import React from 'react'
import "../componentStyle/cardStyle.css";
import housePic from "../assets/houses.jpg";
import mountain from "../assets/mountain.jpg";
import sea from "../assets/heroPic2.jpg";
import masdjid from "../assets/masdjid.jpg";
import {card_data} from "../components/Card"
import "../dashComponets/tourDashStyle.css"
function TourDash() {
  return (
    <div className="dash-card-container">
      {card_data.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-details">
              <div className="card-duration">
                <label htmlFor="">Duration</label>
                <p>2 Days</p>
              </div>
              <div className="card-group-size">
                <label htmlFor="">Group Size </label>
                <p>6 People</p>
              </div>
            </div>
            <div className="card-booking">
              <div className="card-amount">
                <h3>$1200</h3>
              </div>
              <div className="card-button">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourDash