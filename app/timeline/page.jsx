// app/timeline/page.jsx
"use client";
import { NotebookPen, PhoneForwarded, ScrollText, VideoOff } from "lucide-react";
import { useTabs } from "../context/Contextapi";
import Image from "next/image";

const TimelinePage = () => {
  const { callList, textList, videoList } = useTabs();

  // সব entries একসাথে merge করো date অনুযায়ী
  const allEntries = [
    ...callList.map((item) => ({ ...item, type: "call" })),
    ...textList.map((item) => ({ ...item, type: "text" })),
    ...videoList.map((item) => ({ ...item, type: "video" })),
  ].sort((a, b) => b.entryId - a.entryId); // latest first

  const getIcon = (type) => {
    if (type === "call") return  <PhoneForwarded />
    if (type === "text") return     <NotebookPen />
    if (type === "video") return     <VideoOff />;
  };

  const getColor = (type) => {
    if (type === "call") return "border-blue-400 bg-blue-50";
    if (type === "text") return "border-purple-400 bg-purple-50";
    if (type === "video") return "border-green-400 bg-green-50";
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8"> <br />timeline</h1>

      {allEntries.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No interactions yet. Go to a friends page and click Call, Text, or Video!
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {allEntries.map((entry) => (
            <div
              key={entry.entryId}
              className={`flex items-center gap-4 p-4 rounded-xl border-l-4 shadow ${getColor(entry.type)}`}
            >
              {/* Image */}
              <Image
                src={entry.picture}
                alt={entry.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />

    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
  
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <span className="text-xs font-black uppercase tracking-wider text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
        Meet up with
      </span>
      <h2 className="text-lg font-bold text-gray-800 capitalize">
        {entry.name}
      </h2>
    </div>
    
   
    <div className="flex items-center gap-2 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-sm font-medium italic">
        {entry.next_due_date}
      </p>
    </div>
  </div>

  {/* Right Side: Status Indicator */}
  {/* <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse"></div> */}
</div>

              {/* Type Badge */}
              <div className={`badge ${
                entry.type === "call" ? "badge-primary" :
                entry.type === "text" ? "badge-secondary" :
                "badge-accent"
              }`}>
                {entry.type.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;