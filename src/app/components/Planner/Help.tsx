"use client";

import React from "react";

interface HelpProps {
  
}

const Help: React.FC<HelpProps> = ({
  
}) => {
  return (
    <div
      className="absolute flex items-center justify-center
                  top-3 right-7"
      style={{
        zIndex: 4, // Поверх карты
      }}
    >
      <button className="text-3xl font-black text-yellow-300
                    w-[40px] h-[40px] bg-gray-500/50 rounded-full
                    border-1 border-black
                    hover:w-[50px] hover:h-[50px] hover:text-4xl">?</button>
    </div>
  );
};

export default Help;
