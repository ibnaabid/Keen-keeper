"use client";
import { showToast } from "nextjs-toast-notify";
import { useTabs } from "../../context/Contextapi";

const ClientServer = ({ data, setActiveType }) => {
  const { addToCall, addToText, addToVideo } = useTabs();

  const handleCall = () => {
    if (setActiveType) setActiveType("call"); // ← এইটুকু change
    addToCall(data);
    showToast.success(`Call with ${data.name} logged!`);
  };

  const handleText = () => {
    if (setActiveType)
       setActiveType("text"); // ← এইটুকু change
    addToText(data);
    showToast.success(`Text with ${data.name} logged!`);
  };

  const handleVideo = () => {
    if (setActiveType) setActiveType("video"); // ← এইটুকু change
    addToVideo(data);
    showToast.success(`Video with ${data.name} logged!`);
  };

  return (
    <div className="flex gap-4">
      <button onClick={handleCall} className="btn btn-primary">📞 Call</button>
      <button onClick={handleText} className="btn btn-secondary">💬 Text</button>
      <button onClick={handleVideo} className="btn btn-accent">🎥 Video</button>
    </div>
  );
};

export default ClientServer;