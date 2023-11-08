import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const statecontext = createContext();

export const AppProvider = ({ children }) => {
  const [card_data, setCards] = useState([]);
  const [user_data, setUser_data] = useState([]);
  const [message, setMessage] = useState([]);

  const usersDatas = JSON.parse(localStorage.getItem("isLogin"));
  console.log(usersDatas);

  useEffect(() => {
    axios
      .get("https://holiday-planner-4lnj.onrender.com/api/v1/tour/")
      .then((data) => {
        // console.log(data);
        setCards(data.data);
      });
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/all")
      .then((data) => {
        // console.log(data);
        setMessage(data.data);
      });
  }, []);
  console.log(message.data);
  ////////////////////////////////////////////////////
  useEffect(() => {
    axios
      .get("https://holiday-planner-4lnj.onrender.com/api/v1/auth/users", {
        headers: {
          Authorization: `Bearer ${usersDatas.access_token}`,
        },
      })
      .then((data) => {
        // console.log(data);
        alert("success");
        setUser_data(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  const getData = async (url) => {
    const res = await axios.get(
      "https://holiday-planner-4lnj.onrender.com/api/v1/" + url,
      {
        headers: {
          Authorization: "Bearer " + usersDatas?.access_token,
        },
      }
    );

    return res.data;
  };

  const getData_contact = async (url) => {
    const res = await axios.get(
      "https://holiday-api-zj3a.onrender.com/api/v1/" + url,
      {
        headers: {
          Authorization: "Bearer " + usersDatas?.access_token,
        },
      }
    );

    return res.data;
  };
  const toursData = useQuery({
    // queryKey: ["tours"],
    queryFn: getData("tour"),
  });

  // console.log(toursData.data);

  const contact_data = useQuery({
    queryFn: getData_contact("cont/contact/all"),
    onSuccess: (data) => {
      console.log(data);
    },
  });
  console.log(contact_data.data);

  const userData = useQuery({
    // queryKey: ["tours"],
    queryFn: getData("auth/users"),
  });

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      await axios.post(
        "https://holiday-api-zj3a.onrender.com/api/v1/cont/contact",
        data
      );
    },
  });

  return (
    <statecontext.Provider
      value={{
        card_data,
        setCards,
        contactMutation,
        usersDatas,
        userData,
        user_data,
        message,
        contact_data,
        setUser_data,
      }}
    >
      {children}
    </statecontext.Provider>
  );
};

export const mycontext = () => useContext(statecontext);
