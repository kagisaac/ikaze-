import React, { useState } from "react";
import pic from "../assets/proPic1.jpg";
import "../dashComponets/userStyle.css";
import UserModel from "../model/UserModel";
import { mycontext } from "../components/context/ContextProvider";

function Users() {
  const { card_data, userData, user_data } = mycontext();
  // const [userData,setUserData] =useState( [
  //   {
  //     id: "10",
  //     fullName: "Kagenza Isaac",
  //     age: "22",
  //   },
  //   {
  //     id: "2",
  //     fullName: "Kagenza Isaac",
  //     age: "22",
  //   },
  //   {
  //     id: "3",
  //     fullName: "Kagenza Isaac",
  //     age: "22",
  //   },
  //   {
  //     id: "40",
  //     fullName: "Kagenza Isaac",
  //     age: "22",
  //   },
  //   {
  //     id: "5",
  //     fullName: "Kagenza Isaac",
  //     age: "22",
  //   },
    
  // ]);
  const handelDeletRow = (targetindex) => {
    setUserData(userData.filter((_, idx) => idx !== targetindex));
  };
  const[isModalOpen, setModalOpen]= React.useState(false);
  const openModal=()=>setModalOpen(true);
  const closeModal=()=> setModalOpen(false); 
console.log(user_data);

  return (
    <>
      <UserModel isOpen={isModalOpen} />
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user_data.map((user) => (
              <tr key={user.id}>
                <td>
                  <img src={pic} alt="" />
                </td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
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
