import React from 'react'
import "../componentStyle/signupStyle.css"
import  { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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

function Signup() {
  const [input, setInput] = useState({
    firstName: "",
    
    email: "",
    password: "",
  });
  const handleChange = (e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        input
      );
      console.log(res.data);
      localStorage.setItem("isLogin", res.data);
      alert("You have SignUp successfull");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="login">
      <div className="login-container">
        <div className="login-section">
          <div className="heading">
            <h2>SignUp</h2>
            <p>
              Already Have an Account{" "}
              <Link to="/login">
                <i> Login</i>
              </Link>{" "}
            </p>
          </div>
          <form onSubmit={handleSubmit}>

          
            <div className="input-box">
              <label htmlFor="email-input">Full Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={input.firstName}
                />
            </div>
           
          
         
         
          <div className="input-box">
            <label htmlFor="email-input">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={input.email}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email-input">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
              value={input.password}
              />
          </div>
         
          <div className="">
            <input type="checkbox" />
            <label htmlFor="email-input">Remember Me</label>
          </div>
          <div className="input-box">
            <button type="submit"> SignUp</button>
          </div>
          </form>
          <div className="input-box-line">
            <p>--------------or SignUp in with----------</p>
          </div>
          <div className="other-login-button">
            <button>Google</button> <button>Facebook</button>
          </div>
        </div>
        <div className="login-annimation"></div>
      </div>
    </div>
  );
}

export default Signup