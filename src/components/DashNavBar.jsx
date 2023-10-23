import React from 'react'
import "../componentStyle/dashNavStyle.css"
import { AiFillSetting } from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
function DashNavBar() {
  return (
    <div className="dash-nav">
      <div className="dash-name">
        <h3>Hello,Isaac</h3>
      </div>
      <div className="dash-nav-icon">
        <div className="settings-icon">
          <AiFillSetting />
        </div>
        <div className="light-mode">
          <BsFillSunFill />
          Dark Mode
          <BsMoonStarsFill />
        </div>
      </div>
    </div>
  );
}

export default DashNavBar