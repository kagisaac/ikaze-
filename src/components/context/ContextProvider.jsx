import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const statecontext = createContext();

export const AppProvider = ({ children }) => {
  const [card_data, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://holiday-planner-4lnj.onrender.com/api/v1/tour/")
      .then((data) => {
        console.log(data);
        setCards(data.data);
      });
  }, []);

  return (
    <statecontext.Provider value={{ card_data, setCards }}>
      {children}
    </statecontext.Provider>
  );
};

export const mycontext = () => useContext(statecontext);
