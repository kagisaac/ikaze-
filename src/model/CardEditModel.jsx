import React from 'react'
 import { useForm } from "react-hook-form";
function CardEditModel() {
 


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
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/update",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );
      if(res.data)
      {
        console.log('Tour Updated succefully:', res.data);
      }
    } catch (error) {
      console.error(error)
    }
  };
  
  return (
    <>
      <div className="UserModel-container">
        <div className="sub-model">
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            Edit the tour
          </h3>
          <form>
            <div className="userId">
              <label htmlFor="">Destination </label>
              <input
                type="text"
                name="destination"
                placeholder="destination"
                
                // {...register("destination", { required: true })}
              />
              {/* {error.destination && <p>Tour name is required</p>} */}
            </div>
            <div className="userName">
              <label htmlFor="">Title </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                // {...register("title", { required: true })}
              />
              {/* {error.title && <p>Tour Title is required</p>} */}
            </div>
            <div className="userAge">
              <label htmlFor="">Image  </label>
              <input
                type="file"
                name="image"
                // {...register("image", { required: true })}
              />
              {/* {error.title && <p>Tour imagae is required</p>} */}
            </div>
            <div className="userAge">
              <label htmlFor="">Gallery </label>
              <input
                type="file"
                name="Gallery"
                // {...register("Gallery", { required: true })}
              />
              {/* {error.Gallery && <p>Tour Gallery is required</p>} */}
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

export default CardEditModel

