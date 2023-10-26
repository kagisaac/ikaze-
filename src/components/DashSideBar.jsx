import React from 'react'
import "../componentStyle/SideBarStyle.css"
import pic from "../assets/loginImg2.jpg"
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";;
import { SlCalender } from "react-icons/sl";
import {createBrowserRouter,  RouterProvider,  Route,  Link,  Outlet,  createRoutesFromElements,  Routes,} from "react-router-dom";
function DashSideBar() {
  return (
    <div className="dash-sidebar">
      <div className="sidebar-profile">
        <div className="profile-pic">
          {" "}
          <img src={pic} alt="" />
        </div>
        <div className="profile-name">
          <h2>kagenza </h2>
          <p>Traveller</p>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="sidebar-single-items">
          <div className="icons-item">
            <AiFillHome />
            <Link to="dash">
              <h5>Dashboard</h5>
            </Link>
          </div>
        </div>
        <div className="sidebar-single-items">
          <div className="icons-item">
            <BiSolidPlaneAlt />

            <Link to="/tour-dash">
              <h5>Tour</h5>
            </Link>
          </div>
        </div>

        <div className="sidebar-single-items">
          <div className="icons-item">
            <SlCalender />
            <h5>Booking</h5>
          </div>
        </div>
        <div className="sidebar-single-items">
          <div className="icons-item">
            <BiSolidPlaneAlt />
            <Link to="users-dash">
              <h5>User</h5>
            </Link>
          </div>
        </div>
        <div className="sidebar-single-items">
          <div className="icons-item">
            <AiOutlineLogout />
            <Link to="/">
              <h5>LogOut</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashSideBar