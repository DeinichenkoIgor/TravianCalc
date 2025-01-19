// src/app/components/Planner/NodesPanel.tsx
import React, { useEffect, useState } from "react";
import Icon from "../SVG/Icon";

interface NodesPanelProps {
  isVisible: boolean;
  onAddNode: (nodeType: string) => void; // Функция для добавления Ноды
}

type SubMenuKey = "village" | "barracks" | "moving" | "storage";

const NodesPanel: React.FC<NodesPanelProps> = ({ isVisible, onAddNode }) => {
  const [showNodes, setShowNodes] = useState({
    village: false,
    barracks: false,
    moving: false,
    storage: false,
  });

  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuKey | null>(null);
  const [wheelIndex, setWheelIndex] = useState<number>(0);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  // Подменю для каждого пункта
  const subMenus = {
    village: [
      <Icon.VillagesMenu.Villag4446 size="40px" onClick={() => onAddNode("village-4446")} />,
      <Icon.VillagesMenu.Villag3456 size="40px" onClick={() => onAddNode("village-3456")} />,
      <Icon.VillagesMenu.Villag3546 size="40px" onClick={() => onAddNode("village-3546")} />,
      <Icon.VillagesMenu.Villag4356 size="40px" onClick={() => onAddNode("village-4356")} />,
      <Icon.VillagesMenu.Villag5346 size="40px" onClick={() => onAddNode("village-5346")} />,
      <Icon.VillagesMenu.Villag4536 size="40px" onClick={() => onAddNode("village-4536")} />,
      <Icon.VillagesMenu.Villag5436 size="40px" onClick={() => onAddNode("village-5436")} />,
      <Icon.VillagesMenu.Villag4437 size="40px" onClick={() => onAddNode("village-4437")} />,
      <Icon.VillagesMenu.Villag4347 size="40px" onClick={() => onAddNode("village-4347")} />,
      <Icon.VillagesMenu.Villag3447 size="40px" onClick={() => onAddNode("village-3447")} />,
      <Icon.VillagesMenu.Villag9 size="40px" onClick={() => onAddNode("village-9")} />,
      <Icon.VillagesMenu.Villag15 size="40px" onClick={() => onAddNode("village-15")} />,
    ],
    barracks: [
      <Icon.ArmyMenu.Barracks size="40px" onClick={() => onAddNode("barracks")} />,
    ],
    moving: [
      <Icon.MovingMenu.Marketplace size="40px" onClick={() => onAddNode("marketplace")} />,
      <Icon.MovingMenu.Merge size="40px" onClick={() => onAddNode("merge")} />,
      <Icon.MovingMenu.Divide size="40px" onClick={() => onAddNode("divide")} />,
    ],
    storage: [
      <Icon.StrogesMenu.Save size="40px" onClick={() => onAddNode("save")} />,
      <Icon.StrogesMenu.Accumulate size="40px" onClick={() => onAddNode("accumulate")} />,
    ],
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowNodes((prev) => ({ ...prev, village: true })), 200);
      setTimeout(() => setShowNodes((prev) => ({ ...prev, barracks: true })), 400);
      setTimeout(() => setShowNodes((prev) => ({ ...prev, moving: true })), 600);
      setTimeout(() => setShowNodes((prev) => ({ ...prev, storage: true })), 800);
    } else {
      setShowNodes({
        village: false,
        barracks: false,
        moving: false,
        storage: false,
      });
    }
  }, [isVisible]);

  const handleSwipe = (deltaY: number) => {
    if (activeSubMenu) {
      const menuLength = subMenus[activeSubMenu].length;
      if (deltaY > 0) {
        setWheelIndex((prev) => (prev + 1) % menuLength);
      } else {
        setWheelIndex((prev) => (prev - 1 + menuLength) % menuLength);
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    handleSwipe(e.deltaY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY !== null) {
      const deltaY = e.touches[0].clientY - touchStartY;
      if (Math.abs(deltaY) > 50) {
        handleSwipe(deltaY);
        setTouchStartY(null);
      }
    }
  };

  const getStyleForIndex = (index: number): string => {
    if (!activeSubMenu) return "";
    const relativeIndex =
      (index - wheelIndex + subMenus[activeSubMenu].length) % subMenus[activeSubMenu].length;

    switch (relativeIndex) {
      case 0:
        return "opacity-100 scale-100 z-10";
      case 1:
        return "opacity-50 scale-75 z-5 translate-y-10";
      case subMenus[activeSubMenu].length - 1:
        return "opacity-50 scale-75 z-5 -translate-y-10";
      default:
        return "opacity-0 scale-50 z-0 hidden";
    }
  };

  return (
    <div
      className={`absolute flex items-center justify-center
                  bottom-[10px] left-1/2 gap-4
                  transform -translate-x-1/2 transition-all duration-500 ease-out z-[3]`} >
      {/* Village Icon */}
      <div
        className={`relative group transition-all duration-500 ease-out ${
          showNodes.village ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setActiveSubMenu("village")}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        <Icon.NodsMenu.Villag size="50px" />
        {activeSubMenu === "village" && (
          <div
            className="absolute flex flex-col items-center justify-center gap-2
                        p-2 w-40 h-40 overflow-hidden bottom-full left-1/2 z-[4]
                        transition-all duration-300 ease-out transform -translate-x-1/2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
          >
            {subMenus.village.map((icon, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-300 ease-out ${getStyleForIndex(
                  index
                )}`}
              >
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Army Icon */}
      <div
        className={`relative group transition-all duration-500 ease-out ${
          showNodes.barracks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setActiveSubMenu("barracks")}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        <Icon.NodsMenu.Army size="50px" />
        {activeSubMenu === "barracks" && (
          <div
            className="absolute flex flex-col items-center justify-center gap-2
                        p-2 w-40 h-40 overflow-hidden bottom-full left-1/2 z-[4]
                        transition-all duration-300 ease-out transform -translate-x-1/2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel} >
            {subMenus.barracks.map((icon, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-300 ease-out ${getStyleForIndex(
                  index
                )}`}  >
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Moving Icon */}
      <div
        className={`relative group transition-all duration-500 ease-out ${
          showNodes.moving ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setActiveSubMenu("moving")}
        onMouseLeave={() => setActiveSubMenu(null)}  >
        <Icon.NodsMenu.Moving size="50px" />
        {activeSubMenu === "moving" && (
          <div
            className="absolute flex flex-col items-center justify-center gap-2
                        p-2 w-40 h-40 overflow-hidden bottom-full left-1/2 z-[4]
                        transition-all duration-300 ease-out transform -translate-x-1/2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel} >
            {subMenus.moving.map((icon, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-300 ease-out ${getStyleForIndex(
                  index
                )}`}
              >
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Storage Icon */}
      <div
        className={`relative group transition-all duration-500 ease-out ${
          showNodes.storage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setActiveSubMenu("storage")}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        <Icon.NodsMenu.Stroge size="50px" />
        {activeSubMenu === "storage" && (
          <div
            className="absolute flex flex-col items-center justify-center gap-2
                        p-2 w-40 h-40 overflow-hidden bottom-full left-1/2 z-[4]
                        transition-all duration-300 ease-out transform -translate-x-1/2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
          >
            {subMenus.storage.map((icon, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-300 ease-out ${getStyleForIndex(
                  index
                )}`}
              >
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NodesPanel;
