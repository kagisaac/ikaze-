import React from 'react'
import "../componentStyle/tourStyle.css"
import Card from '../components/Card'

function Tours() {
  return (
    <div className="tour">
      <div className="tour-hero">
        <h1>Tour List</h1>
      </div>
      <div className="tour-content">
        <div className="tour-cards">
          <div className="sort-card">
            <div className="sort">
              <p>Sort By:</p>
            </div>
            <div className="release-date">
              <p>Release date</p>
            </div>
            <div className="oder">
              {/* <label htmlFor="">Oder</label> */}
              <p>oder</p>
              <select name="oder" id="">
                <option value="Asecending"></option>
                <option value="Descending"></option>
              </select>
            </div>
          </div>
          <div className="cards">
            <Card />
          </div>
        </div>
        <div className="tour-side-content">
          <div className="tour-aside-heading">
            <h3>Find your Location</h3>
          </div>
          <div className="tour-aside-searchBoxs">
            <input type="text" placeholder="Search Tour" />
            <input type="text" placeholder="Where To" />
            <input type="text" placeholder="Month" />
            <input type="text" placeholder="Duration" />
            <div className="tour-price">
              <div className="min-price">
                <label htmlFor="">
                  <b>Min Price</b>
                </label>
                <input type="text" placeholder="1" />
              </div>
              <div className="min-price">
                <label htmlFor="">
                  <b>Max Price</b>
                </label>
                <input type="text" placeholder="10000" />
              </div>
            </div>
            <div className="tour-category">
              <div className="category">
                <input type="checkbox" /> Cultural
              </div>
              <div className="category">
                <input type="checkbox" /> Adventure
              </div>
              <div className="category">
                <input type="checkbox" /> Historical
              </div>
              <div className="category">
                <input type="checkbox" /> seaside
              </div>
            </div>
            <button>FIND NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tours