"use client";
import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [textList, setTextList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [callList, setCallList] = useState([]);

  const addToText = (app) => {
    if (!textList.find((item) => item.id === app.id)) {
      setTextList([...textList, app]);
    }
  };

  const addToVideo = (app) => {
    if (!videoList.find((item) => item.id === app.id)) {
      setVideoList([...videoList, app]);
    }
  };

  const addToCall = (app) => {
    if (!callList.find((item) => item.id === app.id)) {
      setCallList([...callList, app]);
    }
  };

  return (
    <TabContext.Provider value={{ 
      textList, addToText, 
      videoList, addToVideo, 
      callList, addToCall 
    }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => useContext(TabContext);