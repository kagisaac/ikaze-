import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { json, useNavigate } from "react-router-dom";


import { useForm } from "react-hook-form";

function TourModel({ isOpen, isClosed }) {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();


  const onsubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.destination);
    formData.append("Title", data.title);
    formData.append("backdropImage", data.image[0]);
    formData.append("Gallery", data.Gallery[0]);

    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );
      if(res.data)
      {
        console.log('Tour created:', res.data);
      }
    } catch (error) {
      console.error(error)
    }
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="UserModel-container">
        <div className="sub-model">
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            Add New Tour
          </h3>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="userId">
              <label htmlFor="">Description  </label>
              <input
                type="text"
                name="Description"
                placeholder="Description"
                {...register("Description", { required: true })}
              />
              {/* {error.destination && <p>Tour name is required</p>} */}
            </div>
            <div className="userName">
              <label htmlFor="">Title </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                {...register("title", { required: true })}
              />
              {/* {error.title && <p>Tour Title is required</p>} */}
            </div>
            <div className="userAge">
              <label htmlFor="">Image </label>
              <input
                type="file"
                name="image"
                {...register("image", { required: true })}
              />
              {/* {error.title && <p>Tour imagae is required</p>} */}
            </div>
            <div className="userAge">
              <label htmlFor="">Gallery </label>
              <input
                type="file"
                name="Gallery"
                {...register("Gallery", { required: true })}
              />
              {/* {error.Gallery && <p>Tour Gallery is required</p>} */}
            </div>
            <span>
              <button>Cancel</button>
              <button type="submit">Submit</button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default TourModel;
