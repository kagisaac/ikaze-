import React from 'react'
import "../componentStyle/userModelStyle.css"
function UserModel({isOpen,isClosed}) {
    if(!isOpen) return null;
  return (
    <>
      <div className="UserModel-container">
        <div className="sub-model">
          <form action="">
            <div className="userId">
              <label htmlFor="">Id </label>
              <input type="text" name="id" />
            </div>
            <div className="userName">
              <label htmlFor="">Name </label>
              <input type="text" name="name" />
            </div>
            <div className="userAge">
              <label htmlFor="">Age </label>
              <input type="text" name="age" />
            </div>
            <span>
              <button type="submit">Cancel</button>
              <button type="submit">Submit</button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserModel