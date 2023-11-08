import React, { useState } from "react";
import "../componentStyle/contactStyle.css";
import { BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { mycontext } from "./context/ContextProvider";

function Contact() {
  const [email, setEmail] = useState();
  const { contactMutation } = mycontext();
  const [message, setMessage] = useState();
  // console.log(message);
  const sendMessage = (e) => {
    e.preventDefault();
    contactMutation.mutate({
      email,
      message,
    });
  };
  return (
    <>
      <div className="contact-main-container">
        <div className="contact-hero">CONTACT US</div>
        <div className="contact-section">
          <div className="contact-form">
            <form action="" onSubmit={sendMessage}>
              <div className="sub-input">
                <div className="fname">
                  <input type="text" placeholder="Full Name* " />
                </div>
                <div className="fname">
                  <input
                    type="email"
                    placeholder="Email* "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="sub-input">
                <div className="fname">
                  <input type="text" placeholder="Phone* " />
                </div>
                <div className="fname">
                  <input type="email" placeholder="Email* " />
                </div>
              </div> */}
              <div className="sub-input">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="sub-input">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="contact-form-side">
            <div className="side-info">
              <h3>WHY BOOK WITH US?</h3>
              <li>Best Price Guarantee</li>
              <li>Customer care available 24/7</li>
              <li>Free Travel Insureance</li>
            </div>
            <div className="side-infos">
              <h3>GET A QUESTION?</h3>
              <p>
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <p>
                <BsFillEnvelopeFill style={{ color: "black" }} />{" "}
                holidayplanners@gmail.com
              </p>
              <p>
                <BsTelephoneFill style={{ color: "black" }} /> +123 456 7890
              </p>
            </div>
          </div>
        </div>
        <div className="location-address">
          <div className="contact-address">
            <div className="footer-contact">
              <h2>Need Help?</h2>
              <div className="contact-row">
                <h3>Call Us</h3>
                <p>+250782290301</p>
              </div>
              <div className="contact-row">
                <h3>Email for Us</h3>
                <p>kagisaac103@gmail.com</p>
              </div>
              <div className="contact-row">
                <h3>Location</h3>
                <p>Kicukiro, Kigali, Rwanda</p>
              </div>
              <div className="contact-row">
                <h3>Follow Us</h3>
                <p>Kicukiro, Kigali, Rwanda</p>
              </div>
            </div>
          </div>
          <div className="contact-gps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.50104052401!2d30.09010587477894!3d-1.9528609980294385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f3a6d7d373%3A0xda6c2b3cabfec246!2sKigali%20Heights!5e0!3m2!1sfr!2srw!4v1699285108229!5m2!1sfr!2srw"
              width="100%"
              height="450"
              style={{
                border: "0",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
