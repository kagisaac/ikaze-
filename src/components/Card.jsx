import React from "react";
import "../componentStyle/cardStyle.css";
import housePic from "../assets/houses.jpg";
import mountain from "../assets/mountain.jpg";
import sea from "../assets/heroPic2.jpg";
import masdjid from "../assets/masdjid.jpg";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
export const card_data = [
  {
    image: masdjid,
    title: "Masdjid",
    description:
      "Sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.",
  },
  {
    image: housePic,
    title: "Italy",
    description:
      "Sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.",
  },
  {
    image: sea,
    title: "Sychell",
    description:
      "Sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.",
  },
  {
    image:
      "https://html.geekcodelab.com/holiday-planners/assets/images/banner-slide-1.jpg",
    title: "Atlantic riem",
    description:
      "Sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.",
  },
  {
    image: mountain,
    title: "Everest",
    description:
      "Sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.",
  },
  {
    image:
      "https://html.geekcodelab.com/holiday-planners/assets/images/banner-slide-1.jpg",
    title: "Atlantic riem",
    description:
      "Sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.",
  },
];
function Card() {

  return (
    <div className="card-container">
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
                <Link to={"Tour_single"}>
                  <button> BOOK NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
