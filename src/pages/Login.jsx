import React, { useEffect, useState } from 'react'
import "../componentStyle/loginStyle.css"
import axios from 'axios';
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
    

function Login() {
//   const url = " https://iwacu.onrender.com/api/v1/login";
//   const [data,setData]= useState([]);
//   const fetch = async()=>{
//     try{

//     const result=  await axios.post(url);
//     console.log(result.data)
//     setData(result.data)
//   }catch(error){
//     console.log(error)
//   }
// };
// useEffect(()=>{
//   fetch()
// },[])

const [input, setInput] = useState({
  email: "",
  password: "",
});
const handleChange = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });
};
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(input);
  try {
    const res = await axios.post(
      "https://iwacu.onrender.com/api/v1/login",
      input
    );
    console.log(res.data);
    localStorage.setItem("isLogin", res.data);
    alert("login success");
    navigate("/dash");
  } catch (error) {
    console.log(error);
  }
};
  
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-section">
          <div className="heading">
            <h2>Login</h2>
            <p>
              Doesn't have an account yet ?{" "}
              <Link to="/signup">
                <i>Signup</i>
              </Link>
            </p>
          </div>
           <form onSubmit={handleSubmit}>

          <div className="input-box">
            <label htmlFor="email-input">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={input.email}
              />
          </div>
          <div className="input-box">
            <label htmlFor="email-input">Password</label>
            <input
              type="password"
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
            <button type='submit'>Login</button>
          </div>
          </form>

          <div className="input-box-line">
            <p>--------------or Login in with----------</p>
          </div>
          <div className="other-login-button">
            <button>Google</button> <button>Facebook</button>
          </div>
        </div>
        <div className="login-annimation"> </div>
      </div>
    </div>
  );
}

export default Login