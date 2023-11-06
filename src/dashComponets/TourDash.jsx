import React, { useState } from "react";
import "../componentStyle/cardStyle.css";
import housePic from "../assets/houses.jpg";
import mountain from "../assets/mountain.jpg";
import sea from "../assets/heroPic2.jpg";
import masdjid from "../assets/masdjid.jpg";
//import {card_data} from "../components/Card"
import "../dashComponets/tourDashStyle.css";
import { mycontext } from "../components/context/ContextProvider";
import TourModel from "../model/TourModel";
import UserModel from "../model/UserModel";
import axios from "axios";
import Notiflix from "notiflix";
import CardEditModel from "../model/CardEditModel";


export const Edit = (card)=>{

}
function TourDash() {
  const { card_data } = mycontext();

  console.log(card_data);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isEditModalOpen, SetisEditModalOpen] = React.useState(false);
  const [Selecteditem, SetSelecteditem] = useState(null);

  const handleEditCard = (card) => {
     SetSelecteditem(() => card);
     SetisEditModalOpen(true);
     console.log("selected :" + {card});
   };
  const openModal = () => setModalOpen(true);
  const [tourToEdit, setTourToEdit] = useState();
  console.log(tourToEdit);
  const closeModal = () => setModalOpen(false);
  const [tourToDelete, setTourToDelete] = useState(null);
  const [showDeletionConfirm, setShowDeletionConfirm] = useState(false);

  const handleConfirmDelete = async (_id) => {
    try {
      Notiflix.Confirm.show(
        "Confirm delete tour",
        "Do you agree with me?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${_id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          window.location.reload();
        },
        () => {
          alert("If you say so...");
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (card_data) => {
    handleConfirmDelete();
    // setShowDeleteConfirm(true);
  };
  const handleCancelDelete = () => {
    setShowDeletionConfirm(false);
  };

  return (
    <>
      <UserModel isOpen={isEditModalOpen} />
      <TourModel isOpen={isModalOpen} />
      {isEditModalOpen && <CardEditModel tour={Selecteditem} />}
      <div className="dash-card-container">
        <div className="add-tour-btn">
          <button onClick={openModal}>Add New</button>
        </div>
        <div className="tour-data">
          {card_data.map((card) => (
            <div className="card">
              <img src={card.backdropImage} alt={card.Title} />
              <div className="card-content">
                <h2>{card.Title}</h2>
                <p>{card.Description}</p>
                <div className="card-details">
                  <div className="card-duration">
                    <label htmlFor="">Duration</label>
                    <p>2 Days</p>
                  </div>
                  <div className="card-group-size">
                    <label htmlFor="">Group Size </label>
                    <p>6 People</p>
                  </div>
                </div>
                <div className="card-booking">
                  <div className="card-amount">
                    <h3>$1200</h3>
                  </div>
                  <div className="card-button">
                    <button
                      onClick={() => {
                        handleEditCard(card);
                        // console.log("selected :" + card._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onch
                      onClick={() => {
                        setTourToDelete(card);
                        handleConfirmDelete(card._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showDeletionConfirm && (
            <div className="popup">
              <p>Are you sure you want to delete {tourToDelete._id}?</p>
              <button onClick={handleConfirmDelete}>OK</button>
              <button onClick={handleCancelDelete}>Cancel</button> 
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TourDash;
