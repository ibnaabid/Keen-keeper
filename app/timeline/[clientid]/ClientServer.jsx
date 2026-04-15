"use client";
import { showToast } from "nextjs-toast-notify";
import { useTabs } from "../../context/Contextapi";
import { MessageSquare, Phone, Video } from "lucide-react";

const ClientServer = ({ data, setActiveType }) => {
  const { addToCall, addToText, addToVideo, callList, textList, videoList } = useTabs();

  // ১. কল হ্যান্ডলার
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

  // ২. টেক্সট হ্যান্ডলার
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

  // ৩. ভিডিও হ্যান্ডলার
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
      {/* Call Button */}
      <button onClick={handleCall} className="btn btn-primary flex items-center gap-2">
        <Phone size={18} /> Call
      </button>

      {/* Text Button */}
      <button onClick={handleText} className="btn btn-secondary flex items-center gap-2">
        <MessageSquare size={18} /> Text
      </button>

      {/* Video Button */}
      <button onClick={handleVideo} className="btn btn-accent flex items-center gap-2 text-white">
        <Video size={18} /> Video
      </button>
    </div>
  );
};

export default ClientServer;