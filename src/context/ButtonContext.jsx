'use client';
import { createContext, useState } from "react";

export const ButtonContext = createContext();

const ButtonProvider = ({ children }) => {
  const [friendData, setFriendData] = useState([]);
  const [selectedTimeline, setSelectedTimeline] = useState("");

  const data = {
    friendData,
    setFriendData,
    selectedTimeline,
    setSelectedTimeline,
  };

  return (
    <ButtonContext.Provider value={data}>{children}</ButtonContext.Provider>
  );
};

export default ButtonProvider;
