import React from 'react'
import "../model/navModel.css"
import {GiCrossedBones} from "react-icons/gi"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
function NavigationModal({ isOpen, onClose }) {
     if (!isOpen) return null;
  return (
    <>
     <div className="nav_modal">
      <ul className="nav_modal_links">
        <li><a href="/">Home</a></li>    

        
        
        <li><a href="/services">Services</a></li>
        <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
        <li><a href="/tour">Tour</a></li>
        <li><a href="/testimonial">Testimonial</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Signup">SignUp</a></li>
        

        {/* Add more navigation links as needed */}
      </ul>
      <button onClick={onClose}><GiCrossedBones/></button>
    </div>
    </>
  )
}

export default NavigationModal