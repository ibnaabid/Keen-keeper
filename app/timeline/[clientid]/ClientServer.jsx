"use client";
import { showToast } from "nextjs-toast-notify";
import { useTabs } from "../../context/Contextapi";
import { MessageSquare, Phone, Video } from "lucide-react";

const ClientServer = ({ data, setActiveType }) => {
  const { addToCall, addToText, addToVideo, callList, textList, videoList } = useTabs();

  
  const handleCall = () => {
    const isExist = callList.find(item => item.id === data.id);
    if (!isExist) {
      if (setActiveType) setActiveType("call");
      addToCall(data);
      showToast.success(`Call with ${data.name} logged!`);
    } else {
      showToast.error("Already added to Call List");
    }
  };

  const handleText = () => {
    const isExist = textList.find(item => item.id === data.id);
    if (!isExist) {
      if (setActiveType) setActiveType("text");
      addToText(data);
      showToast.success(`Text with ${data.name} logged!`);
    } else {
      showToast.error("Already added to Text List");
    }
  };

  const handleVideo = () => {
    const isExist = videoList.find(item => item.id === data.id);
    if (!isExist) {
      if (setActiveType) setActiveType("video");
      addToVideo(data);
      showToast.success(`Video with ${data.name} logged!`);
    } else {
      showToast.error("Already added to Video List");
    }
  };

  return (
    <div className="flex gap-4">
   
      <button onClick={handleCall} className="btn btn-primary flex items-center gap-2">
        <Phone size={18} /> Call
      </button>

      <button onClick={handleText} className="btn btn-secondary flex items-center gap-2">
        <MessageSquare size={18} /> Text
      </button>

      <button onClick={handleVideo} className="btn btn-accent flex items-center gap-2 text-white">
        <Video size={18} /> Video
      </button>
    </div>
  );
};

export default ClientServer;