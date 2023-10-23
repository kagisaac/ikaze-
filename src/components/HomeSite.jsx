import React from 'react'
import Video from "../assets/video.mp4";
import "../componentStyle/homeStyle.css"
import banner_slide1 from "../assets/banner-slide-1.jpg"
import travel_img from "../assets/travel_img.jpg"
import Contact from "../components/Contact"
import Card from './Card';
function HomeSite() {
  
  return (
    <>
      <div className="home-section">
        <div className="content">
          <div className="title">
            <div className="title-heading">
              <h1>Enjoy The Travel With </h1>
              <h3>Holiday Planner</h3>
            </div>
            <div className="title-discription">
              <p>
                Discover the enchanting allure of Rwanda, where stunning
                landscapes, diverse wildlife, and welcoming locals beckon
                travelers to an unforgettable adventure!
              </p>
              <div className="next-prev">
                <button>prev</button>
                <button>next</button>
              </div>
            </div>
          </div>

          <div className="search">
            <div className="container">
              <label htmlFor="">Where To? </label>
              <input type="text" placeholder="Search Your location" />
            </div>
            <div className="container">
              <label htmlFor="">When</label>
              <input type="date" />
            </div>
            <div className="container">
              <label htmlFor="">Travel Type</label>
              <select name="travel-type" id="">
                <option value="type">Travel Type</option>
                <option value="cultural">Cultural</option>
                <option value="Adventure">Adventure</option>
                <option value="Historical">Historical</option>
                <option value="Seaside">Seaside</option>
                <option value="Discovery">Discovery</option>
              </select>
            </div>
            <button className="search-button">Explore Now</button>
          </div>
        </div>
        <div className="">
          <div className="about-section ">
            <div className="about-pic">
              <img
                style={{ width: "70vh", height: "50vh" }}
                src={travel_img}
                alt=""
              />
            </div>

            <div className="about-content">
              <h1>About Us</h1>
              <h2>Plan Your Trip With Us</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the blind texts it is an almost unorthographic. Italic
                Mountains, she had a last view back on the skyline
              </p>
              <button className="readMore-button">READ MORE</button>
            </div>
          </div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default HomeSite