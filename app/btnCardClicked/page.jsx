"use client";
import { useState } from "react";
import ClientServer from "./ClientServer";
import Image from "next/image";

const ClientPart = ({ data }) => {
  const [activeType, setActiveType] = useState("");

  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Friend Info */}
      <div className="flex gap-6 items-center mb-10">
        <Image
          src={data.picture}
          alt={data.name}
          width={120}
          height={120}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-gray-500">{data.email}</p>
          <p className="mt-2">{data.bio}</p>
          <div className="flex gap-2 mt-2">
            {data.tags.map((tag, i) => (
              <span key={i} className="badge badge-outline">{tag}</span>
            ))}
          </div>
          <span className={`badge mt-2 ${
            data.status === "overdue" ? "badge-error" :
            data.status === "almost due" ? "badge-warning" :
            "badge-success"
          }`}>
            {data.status}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card bg-base-200 p-4 text-center">
          <p className="text-sm text-gray-500">Days Since Contact</p>
          <p className="text-2xl font-bold">{data.days_since_contact}</p>
        </div>
        <div className="card bg-base-200 p-4 text-center">
          <p className="text-sm text-gray-500">Goal (days)</p>
          <p className="text-2xl font-bold">{data.goal}</p>
        </div>
        <div className="card bg-base-200 p-4 text-center">
          <p className="text-sm text-gray-500">Next Due Date</p>
          <p className="text-2xl font-bold">{data.next_due_date}</p>
        </div>
      </div>

      {/* Call, Text, Video Buttons */}
      <ClientServer data={data} setActiveType={setActiveType} />
    </div>
  );
};

export default ClientPart;