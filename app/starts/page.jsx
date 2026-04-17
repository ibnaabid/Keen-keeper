"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'text', value: 45, fill: '#7E35E1' },
  { name: 'call', value: 30, fill: '#244D3F' },
  { name: 'video', value: 25, fill: '#ef4444' },
];

export default function ContactPieChart({ isAnimationActive = true }) {
  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className='text-3xl font-bold'>Friendship Analytics</h2>
      <h2 className="text-xl text-gray-500 font-bold mb-6 mt-5">By Interaction Type </h2>
      
      <div className="h-80 w-full">
        <ResponsiveContainer minWidth="100%" minHeight="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
              isAnimationActive={isAnimationActive}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}