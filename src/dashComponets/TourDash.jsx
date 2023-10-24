import React from "react";
import "../componentStyle/cardStyle.css";
import housePic from "../assets/houses.jpg";
import mountain from "../assets/mountain.jpg";
import sea from "../assets/heroPic2.jpg";
import masdjid from "../assets/masdjid.jpg";
//import {card_data} from "../components/Card"
import "../dashComponets/tourDashStyle.css";
import { mycontext } from "../components/context/ContextProvider";
import TourModel from "../model/TourModel";
function TourDash() {
  const { card_data } = mycontext();

  console.log(card_data);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <TourModel isOpen={isModalOpen} />
      <div className="dash-card-container">
        <div className="add-tour-btn">
          <button onClick={openModal}>Add New</button>
        </div>
        <div className="tour-data">
          {card_data.map((card) => (
            <div className="card">
              <img src={card.backdropImage} alt={card.Title} />
              <div className="card-content">
                <h2>{card.Title}</h2>
                <p>{card.Title}</p>
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
      </div>
    </>
  );
}

export default TourDash;
