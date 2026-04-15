"use client";
import { showToast } from "nextjs-toast-notify";
import { useTabs } from "../../context/Contextapi";

const ClientServer = ({ data, setActiveType }) => {

  const { addToCall, callList, videoList, textList, addToText, addToVideo } = useTabs();

  const handleCall = () => {
    setActiveType("call");

    const isExist = callList.find(item => item.id === data.id);
    if (!isExist) {
      addToCall(data); 
      showToast.success("Added to Call History");
    } else {
      showToast.error("Already Added!");
    }
  };

  const handleText = () => {
    setActiveType("text");

    const isExist = textList.find(item => item.id === data.id);
    if (!isExist) {
      addToText(data); 
      showToast.success("Added to Text");
    } else {
      showToast.error("Already Added!");
    }
  };

  const handleVideo = () => {
    setActiveType("video");

    const isExist = videoList.find(item => item.id === data.id);
    if (!isExist) {
      addToVideo(data); 
      showToast.success("Added to Video");
    } else {
      showToast.error("Already Added!");
    }
  };

  return (
    <div className="flex gap-4">
      <button onClick={handleCall} className="btn">Call</button>
      <button onClick={handleText} className="btn">Text</button>
      <button onClick={handleVideo} className="btn">Video</button>
    </div>
  );
};

export default ClientServer;