"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone, MessageSquare, Video, Calendar } from "lucide-react";
import ClientServer from "../timeline/[clientid]/ClientServer";


const ClientPart = ({ data }) => {
  const [activeType, setActiveType] = useState("");

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">No selection found. Please select a contact.</h2>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="flex gap-6 items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border">
        <Image 
          src={data.picture} 
          alt={data.name} 
          width={120} 
          height={120} 
          className="rounded-full ring-4 ring-gray-50 shadow-lg" 
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black text-gray-800">{data.name}</h1>
              <p className="text-gray-500 font-medium">{data.email}</p>
            </div>
            <span className={`badge py-3 px-4 font-bold border-none shadow-sm ${
              data.status === "overdue" ? "bg-red-100 text-red-600" :
              data.status === "almost due" ? "bg-orange-100 text-orange-600" :
              "bg-green-100 text-green-600"
            }`}>
              {data.status.toUpperCase()}
            </span>
          </div>
          
          <p className="mt-4 text-gray-600 leading-relaxed">{data.bio}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {data.tags && data.tags.split(',').map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-tighter">
                #{tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white shadow-sm border p-6 text-center rounded-2xl">
          <p className="text-xs font-black uppercase text-gray-400 mb-2">Days Since Contact</p>
          <p className="text-3xl font-black text-blue-600">{data.days_since_contact}</p>
        </div>
        <div className="card bg-white shadow-sm border p-6 text-center rounded-2xl">
          <p className="text-xs font-black uppercase text-gray-400 mb-2">Goal (days)</p>
          <p className="text-3xl font-black text-purple-600">{data.goal}</p>
        </div>
        <div className="card bg-white shadow-sm border p-6 text-center rounded-2xl">
          <p className="text-xs font-black uppercase text-gray-400 mb-2 flex items-center justify-center gap-2">
            <Calendar size={14} /> Next Due Date
          </p>
          <p className="text-xl font-bold text-gray-700">{data.next_due_date}</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-3xl border border-dashed border-gray-200">
        <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase text-center tracking-widest">Action Center</h3>
        <ClientServer data={data} setActiveType={setActiveType} />
      </div>
    </div>
  );
};

export default ClientPart;