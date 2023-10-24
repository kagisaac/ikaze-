import React ,{useState}from 'react'
import "../componentStyle/userModelStyle.css"
function UserModel({isOpen,isClosed}) {
  const [formState,setFormState]= useState(
    {
      id:"",
      name:"",
      age:""
    }
  )
  const handleChange=(e)=>
  {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value

    })

  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(formState);
  }
    if(!isOpen) return null;
  return (
    <>
      <div className="UserModel-container">
        <div className="sub-model">
          <form action="">
            <div className="userId">
              <label htmlFor="">Id </label>
              <input type="text" name="id"value={formState.id} onChange={handleChange}/>
            </div>
            <div className="userName">
              <label htmlFor="">Name </label>
              <input type="text" name="name" value={formState.name}onChange={handleChange} />
            </div>
            <div className="userAge">
              <label htmlFor="">Age </label>
              <input type="text" name="age"  value={formState.age} onChange={handleChange}/>
            </div>
            <span>
              <button type="submit">Cancel</button>
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserModel