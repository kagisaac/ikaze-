import React from 'react'

function Tour_single() {
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
          <div className="single-tour-Details">
            <div className="single-tour-Details-title">
              <h2>
                A wonderful serenity has taken possession of my entire soul
              </h2>
            </div>
            <div className="single-tour-Details-summary">
              <div className="days">2 days</div>
              <div className="days">6 People</div>
              <div className="days">18</div>
              <div className="days">Greece</div>
              <div className="days">Discovery</div>
            </div>
            <div className="single-tour-Details-info">
              <p>
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams. I
                should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams
                steal into the inner sanctuary, I throw myself down among the
                tall grass by the trickling stream; and, as I lie close to the
                earth, a thousand unknown plants are noticed by me: when I hear
                the buzz of the little world among the stalks, and grow familiar
                with the countless indescribable forms of the insects and flies,
                then I feel the presence of the Almighty, who formed us in his
                own image, and the breath
              </p>
            </div>
            <div className="single-tour-Details-highlight">
              <div className="detail-discription">
                <div className="discr-title">
                  <h3>Destination</h3>
                  <p>Greece</p>
                </div>
              </div>
              <div className="detail-discription">
                <div className="discr-title">
                  <h3>Departure</h3>
                  <p>Kigali</p>
                </div>
              </div>
              <div className="detail-discription">
                <div className="discr-title">
                  <h3>Departure Time</h3>
                  <p>9:15 AM To 9:30 AM.</p>
                </div>
              </div>
              <div className="detail-discription">
                <div className="discr-title">
                  <h3>Return Time</h3>
                  <p>Approximately 10:30 PM.</p>
                </div>
              </div>
              <div className="detail-discription">
                <div className="discr-title">
                  <h3>Price Included</h3>
                  <p>
                    5 Star Accommodation Air fases 3 Nights Hotel Accomodation
                    All transportation in destination location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-side-content">
          <div className="tour-aside-heading">
            <h3>BOOK THIS TOUR</h3>
          </div>
          <div className="tour-aside-searchBoxs">
            <input type="text" placeholder="Full Name *" />
            <input type="text" placeholder="Email *" />
            <input type="text" placeholder="Comfirm Email *" />
            <input type="text" placeholder="Phone" />
            <input type="date" placeholder="date *" />
            <input type="number" placeholder="Number of Ticket" />
            <textarea rows="5" cols="auto" name="description">
              Enter Your Message
            </textarea>
            <br></br>

            
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour_single  