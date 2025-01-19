"use client";

import React from "react";

interface ShowCoordinatesProps {
  selectedCoordinates: { row: number; column: number } | null; // Глобальные координаты
}

const ShowCoordinates: React.FC<ShowCoordinatesProps> = ({ selectedCoordinates }) => {
  const row = selectedCoordinates?.row ?? "-";
  const column = selectedCoordinates?.column ?? "-";

  return (
    <div
      className="absolute bg-gray-500/80 text-black flex items-center justify-center
                    w-[120px] h-[40px] rounded-t-lg bottom-0 right-0 z-[2]"
    >
      <div className="flex gap-x-1">
        <span className="flex justify-center items-center text-sm text-white">X:</span>
        <div className="flex justify-center items-center bg-white h-[20px] w-[24px] rounded text-sm">
          {column}
        </div>
        <span className="flex justify-center items-center text-sm text-white">Y:</span>
        <div className="flex justify-center items-center bg-white h-[20px] w-[24px] rounded text-sm">
          {row}
        </div>
      </div>
    </div>
  );
};

export default ShowCoordinates;
