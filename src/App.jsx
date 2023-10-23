import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import HomeSite from "./components/homeSite";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



// import Card from './components/Card'

import "./App.css";
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
import Card, { card_data } from "./components/Card";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tours from "./pages/Tours";
import Tour_single from "./pages/Tour_single";
import Dashboard from "./pages/Dashboard";
import DashSideBar from "./components/DashSideBar"
import DashNavBar from "./components/DashNavBar"
import TourDash from "./dashComponets/TourDash"
import Users from "./dashComponets/Users"
const DashLayout= ()=>{
  return (
    <>
      <DashSideBar />
      <DashNavBar />

      <Outlet />
    </>
  );}
const AppLayout = () => {
  return (
    <>
      <Navbar />
      
      <Outlet />
      {/* <Card/> */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomeSite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tour" element={<Tours />} />
            <Route path="/Tour_single" element={<Tour_single />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<DashLayout />}>
            <Route index path="/dash/" element={<Dashboard />} />
            <Route path="tour-dash" element={<TourDash />} />
            <Route path="users-dash" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;