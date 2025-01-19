"use client";

import React from "react";
import { usePlanner } from "../../context/PlannerContext";

const ServerSpeedPanel: React.FC = () => {
  const { serverSpeed, setServerSpeed } = usePlanner(); // Берем значения из контекста

  return (
    <div
      className="absolute bg-gray-500/80 text-black flex items-center justify-center
                 w-[120px] h-[40px] rounded-b-lg top-0 left-0 z-[2]"
    >
      <div className="flex gap-x-1">
        <select
          className="bg-white h-[20px] w-[80px] rounded text-sm text-center focus:outline-none"
          value={serverSpeed}
          onChange={(e) => setServerSpeed(Number(e.target.value))} // Переводим значение в число
        >
          <option value={1}>T4.6 1x</option>
          <option value={2}>T4.6 2x</option>
          <option value={3}>T4.6 3x</option>
          <option value={5}>T4.6 5x</option>
          <option value={10}>T4.6 10x</option>
        </select>
      </div>
    </div>
  );
};

export default ServerSpeedPanel;
