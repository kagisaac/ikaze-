import React from 'react'
import "../componentStyle/footerStyle.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className="main-footer">
            <div className="footer-discription">
                <div className='log'>
                    <img src="logo1.JPG" alt="" />
                </div>
                <div className='Content'>Holiday Planners sit amet consectetur adipisicing elit. <br /> Perferendis sapiente tenetur officiis explicabo fugit,<br /> sit mollitia eum atque excepturi quaerat autem.</div>
                <div className='input-box'><input type="email" placeholder='Enter Your Email' /> <button >SUBMIT</button></div>
            </div>
            <div className="footer-navigation">
                <h2>Navigation</h2>|
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Signup</li>

                </ul>
              
            </div>
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
        <div className="sub-footer">
            <div className="policy">
              <p>Copy Right  &copy; 2023 <i>IMSC LTD</i></p>  
            </div>
            <div className="term-condition">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Cookie Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer