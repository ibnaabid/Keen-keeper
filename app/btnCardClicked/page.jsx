"use client";
import { useState } from "react";
import { useTabs } from "../context/Contextapi";
import ClientServer from "./ClientServer";
import Image from "next/image";

const ClientPart = ({ data }) => {
  const { callList, textList, videoList } = useTabs();
  const [activeType, setActiveType] = useState("");

  return (
    <div className="p-10">

      <ClientServer data={data} setActiveType={setActiveType} />

      <div className="grid grid-cols-3 gap-5 mt-10">

        {activeType === "" && <h2>Click a button to show data</h2>}

        {activeType === "call" && callList.length === 0 && <h2>No Call Data</h2>}
        {activeType === "text" && textList.length === 0 && <h2>No Text Data</h2>}
        {activeType === "video" && videoList.length === 0 && <h2>No Video Data</h2>}

        {activeType === "call" &&
          callList.map((item) => (
            <div key={item.id}>
              <Image src={item.picture} alt="" width={150} height={150} />
              <h2>{item.name}</h2>
            </div>
          ))}

        {activeType === "text" &&
          textList.map((item) => (
            <div key={item.id}>
              <Image src={item.picture} alt="" width={150} height={150} />
              <h2>{item.name}</h2>
            </div>
          ))}

        {activeType === "video" &&
          videoList.map((item) => (
            <div key={item.id}>
              <Image src={item.picture} alt="" width={150} height={150} />
              <h2>{item.name}</h2>
            </div>
          ))}

      </div>
    </div>
  );
};

export default ClientPart;