import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import "../componentStyle/Navbar.css"
import NavigationModal  from "../model/NavigationModal"
import {AiOutlineSearch ,AiFillPhone,AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter,AiOutlineMail} from "react-icons/ai"
import {BiMenuAltRight} from "react-icons/bi"

function Navbar() {
  // const [isStatic, setIsStatic] = useState(false)

  //   const scrolled = useCallback(() => {
  //       setIsStatic(window.scrollY > 130)
  //   }, [])

  //   useEffect(() => {
  //       window.addEventListener('scroll', scrolled)
  //   })





  
   const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
    <NavigationModal isOpen={isModalOpen} onClose={closeModal} />
    <div className="nav-wrap">

    <div className='general-navBar'>
      <div className="contact-nav">
        <AiOutlineMail/>

        <p>holidayplanner@gmail.com</p>
        <AiFillPhone/><p>+250782290301</p>
      </div>
      <div className="social-links">
        <AiFillFacebook/>
        <AiOutlineInstagram/>
        <AiOutlineTwitter/>

      </div>


    </div>
    <div className="navBar">
       {/* <header className={`site-header ${isStatic ? 'static-header' : ''}`}></header> */}
        <div  className="log">
            <img style={{height: '90px',width:"200px"}} src="logo1.JPG" alt="" />
        </div>
        <div className="navButton">
            <button className='reserve'>RESERVE</button>
            <button className='search-icon'><AiOutlineSearch/></button>
             <button className='humburger' onClick={openModal}><BiMenuAltRight/></button>          
            

            
        </div>
    </div>
    </div>
   
       
    </>
  )
}

export default Navbar


