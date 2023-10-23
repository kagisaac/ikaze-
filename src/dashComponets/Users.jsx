import React, { useState } from "react";
import pic from "../assets/proPic1.jpg";
import "../dashComponets/userStyle.css";
import UserModel from "../model/UserModel";

function Users() {
  const [userData,setUserData] =useState( [
    {
      id: "1",
      fullName: "Kagenza Isaac",
      age: "22",
    },
    {
      id: "2",
      fullName: "Kagenza Isaac",
      age: "22",
    },
    {
      id: "3",
      fullName: "Kagenza Isaac",
      age: "22",
    },
    {
      id: "4",
      fullName: "Kagenza Isaac",
      age: "22",
    },
    {
      id: "5",
      fullName: "Kagenza Isaac",
      age: "22",
    },
  ]);
  const handelDeletRow = (targetindex) => {
    setUserData(userData.filter((_, idx) => idx !== targetindex));
  };
  const[isModalOpen, setModalOpen]= React.useState(false);
  const openModal=()=>setModalOpen(true);
  const closeModal=()=> setModalOpen(false); 
  

  return (
    <>
      <UserModel isOpen={isModalOpen} />
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Profile Pic</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user,index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={pic} alt="" />
                </td>
                <td>{user.fullName}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={openModal}>Edit</button>
                  <button onClick={() => handelDeletRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
