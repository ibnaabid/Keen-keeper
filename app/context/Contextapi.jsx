"use client";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
 
  const [textList, setTextList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [callList, setCallList] = useState([]);

  const addToText = (app) => {
    const isExist = textList.find((item) => item.id === app.id);
    if (!isExist) {
      setTextList([...textList, app]);
      toast.success("Added to Text List!");
    } else {
      toast.error("Already in Text List");
    }
  };

  const addToVideo = (app) => {
    const isExist = videoList.find((item) => item.id === app.id);
    if (!isExist) {
      setVideoList([...videoList, app]);
      toast.success("Added to Video List!");
    } else {
      toast.error("Already in Video List");
    }
  };

  const addToCall = (app) => {
    const isExist = callList.find((item) => item.id === app.id);
    if (!isExist) {
      setCallList([...callList, app]);
      toast.success("Added to Call List!");
    } else {
      toast.error("Already in Call List");
    }
  };


  return (
    <TabContext.Provider value={{ 
        textList, addToText, removeText,
        videoList, addToVideo, removeVideo,
        callList, addToCall, removeCall 
    }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => useContext(TabContext);