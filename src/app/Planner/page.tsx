// page.tsx
"use client";

import React from "react";
import { useState, useEffect } from "react";
import ServerSpeedPanel from "../components/Planner/ServerSpeedPanel";
import TimePanel from "../components/Planner/TimePanel";
import Help from "../components/Planner/Help";
import ShowCoordinates from "../components/Planner/ShowCoordinates";
import NodesPanel from "../components/Planner/NodesPanel";
import Nodes4446 from "../components/Planner/Nodes/Villages/Villag4446";
import Nodes3456 from "../components/Planner/Nodes/Villages/Villag3456";
import Nodes3546 from "../components/Planner/Nodes/Villages/Villag3546";
import Nodes4356 from "../components/Planner/Nodes/Villages/Villag4356";
import Nodes5346 from "../components/Planner/Nodes/Villages/Villag5346";
import Nodes4536 from "../components/Planner/Nodes/Villages/Villag4536";
import Nodes5436 from "../components/Planner/Nodes/Villages/Villag5436";
import Nodes4437 from "../components/Planner/Nodes/Villages/Villag4437";
import Nodes4347 from "../components/Planner/Nodes/Villages/Villag4347";
import Nodes3447 from "../components/Planner/Nodes/Villages/Villag3447";
import Nodes9 from "../components/Planner/Nodes/Villages/Villag9";
import Nodes15 from "../components/Planner/Nodes/Villages/Villag15";
import NodesBarracks from "../components/Planner/Nodes/Army/Barracks";
import NodesMarketplace from "../components/Planner/Nodes/Moving/Marketplace";
import NodesMerge from "../components/Planner/Nodes/Moving/Merge";
import NodesDivide from "../components/Planner/Nodes/Moving/Divide";
import NodesSave from "../components/Planner/Nodes/Stroges/Save";
import NodesAccumulate from "../components/Planner/Nodes/Stroges/Accumulate";
import { usePlanner } from "../context/PlannerContext";

export default function Planner() {
  const { nodes, setNodes, serverSpeed} = usePlanner();

  const gridSize = 50; // Размер сетки 50x50
  const cellSize = 40; // Размер ячейки

  const [windowSize, setWindowSize] = useState({ width: 100, height: 100 }); // Минимальный размер экрана
  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [selectedCell, setSelectedCell] = useState<number | null>(null); // Для выделения ячейки   
  const [isVisible, setIsVisible] = useState(false); // Управляет анимацией видимости
  const [selectedCoordinates, setSelectedCoordinates] = useState<{ row: number; column: number } | null>(null);
  const [showPanel, setShowPanel] = useState(false); // Управляет наличием панели в DOM 

  //  // Восстановление узлов из localStorage
  //  useEffect(() => {
  //   const savedNodes = localStorage.getItem("nodes");
  //   if (savedNodes) {
  //     setNodes(JSON.parse(savedNodes));
  //   }
  // }, [setNodes]);

  // // Сохранение узлов в localStorage
  // useEffect(() => {
  //   localStorage.setItem("nodes", JSON.stringify(nodes));
  // }, [nodes]);

  // Обновление ширины и высоты окна
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth - 30,
        height: window.innerHeight - 100,
      });
    };
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  // Обработка начала перемещения (мышь или касание)
  const handlePointerDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    setStartPosition({ x: clientX, y: clientY });
  };

  // Обработка перемещения
  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - startPosition.x;
    const deltaY = clientY - startPosition.y;

    setOffset((prev) => ({
      top: prev.top + deltaY,
      left: prev.left + deltaX,
    }));

    setStartPosition({ x: clientX, y: clientY });
  };

  // Завершение перемещения
  const handlePointerUp = () => {
    setIsDragging(false);
  };  

  // Обработка клика по карте
  const handleCellClick = (index: number) => {
    const row = Math.floor(index / gridSize); // Глобальная строка
    const col = index % gridSize; // Глобальный столбец
  
    const hasNode = nodes.some((node) => node.position === index);
  
    if (selectedCell === index) {
      // Если кликнули по уже выделенной клетке, снимаем выделение
      setSelectedCell(null);
      setSelectedCoordinates(null);
      setShowPanel(false); // Убираем меню
      return;
    }
  
    // Если кликнули по новой клетке, обновляем выделение
    setSelectedCell(index);
    setSelectedCoordinates({ row, column: col });
  
    // Контролируем показ меню
    if (hasNode) {
      // Если есть нода, меню не появляется
      setShowPanel(false);
    } else {
      // Если ноды нет, меню появляется
      setShowPanel(true);
    }
  };
  
  
  // Следим за выделением клетки (меню)
  useEffect(() => {
    if (selectedCell !== null && !nodes.some((node) => node.position === selectedCell)) {
      setShowPanel(true); // Добавляем панель в DOM
      setTimeout(() => setIsVisible(true), 10); // Запускаем анимацию
    } else {
      setIsVisible(false); // Начинаем анимацию скрытия
      setTimeout(() => setShowPanel(false), 500); // Удаляем панель из DOM
    }
  }, [selectedCell, nodes]);

  // Удалить Ноду клавиатурой
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Delete" && selectedCell !== null) {
        setNodes((prevNodes) =>
          prevNodes.filter((node) => node.position !== selectedCell)
        );
        setSelectedCell(null);
        setSelectedCoordinates(null);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell]);
  
  // Удалить Ноду с мобильного устройства
  const handleDeleteNode = (position: number) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.position !== position));
    if (selectedCell === position) {
      setSelectedCell(null);
      setSelectedCoordinates(null);
    }
  };
  

  const nodeComponents: { [key: string]: React.FC<{ position: number; onDelete: () => void; serverSpeed: number }> } = {
    "village-4446": Nodes4446,  
    "village-3456": Nodes3456,
    "village-3546": Nodes3546,
    "village-4356": Nodes4356,
    "village-5346": Nodes5346,
    "village-4536": Nodes4536,
    "village-5436": Nodes5436,
    "village-4437": Nodes4437,
    "village-4347": Nodes4347,
    "village-3447": Nodes3447,
    "village-9": Nodes9,
    "village-15": Nodes15,
    "barracks": NodesBarracks,
    "marketplace": NodesMarketplace,
    "merge": NodesMerge,
    "divide": NodesDivide,
    "save": NodesSave,
    "accumulate": NodesAccumulate,
  };
  
  // Добавление Нод
  const handleAddNode = (nodeType: string) => {
    if (selectedCoordinates) {
      const { row, column } = selectedCoordinates;
  
      // Проверяем границы сетки
      if (row < 0 || column < 0 || row >= gridSize || column >= gridSize) {
        console.warn("Selected cell is out of bounds!");
        return;
      }
  
      // Вычисляем позицию в линейном массиве
      const newPosition = row * gridSize + column;
  
      // Проверяем, что ноды нет на этой позиции
      if (!nodes.some((node) => node.position === newPosition)) {
        setNodes((prev) => [...prev, { type: nodeType, position: newPosition }]);
      } else {
        console.warn("Node already exists at this position!");
      }
  
      // Сбрасываем выделение
      setSelectedCell(null);
    }
  };
    
  return (
    <div
      className="flex items-center justify-center flex-wrap flex-row content-center"
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* Координаты столбцов */}
      <div className="relative flex items-center ml-[20px] border-x-2 border-t-2 border-gray-400 h-[20px] overflow-hidden"
        style={{ width: `${windowSize.width}px` }} >
        <div className="absolute flex" style={{ left: `${offset.left}px` }} >
          {Array.from({ length: gridSize }).map((_, col) => (
            <div className="flex items-center justify-center border-r border-gray-200 bg-white text-xs box-border h-[40px]"
              key={col} style={{ width: `${cellSize}px` }} >
              {col}
            </div>
          ))}
        </div>
      </div>

      {/* Координаты строк */}
      <div className="relative flex justify-center border-y-2 border-l-2 border-gray-400 w-[20px] overflow-hidden"
        style={{ height: `${windowSize.height}px` }} >
        <div className="absolute flex flex-col" style={{ top: `${offset.top}px` }} >
          {Array.from({ length: gridSize }).map((_, row) => (
            <div className="flex items-center justify-center border-b border-gray-200 bg-white text-xs box-border w-[40px]"
              key={row} style={{ height: `${cellSize}px` }} >
              {row}
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* Контейнер для окна */}
        <div className="relative border-2 border-gray-400 overflow-hidden"
            style={{
              width: `${windowSize.width}px`,
              height: `${windowSize.height}px`,
            }}
            onMouseDown={handlePointerDown}
            onTouchStart={handlePointerDown} >
          {/* Слой для тени */}
          <div className="pointer-events-none absolute inset-0 z-[1]"
                style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)" }} >
          </div>
          {/* Контейнер сетки */}
          <div
              className="absolute grid border-2 border-green-400 cursor-grab box-border bg-green-100 z-0"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
                top: `${offset.top}px`,
                left: `${offset.left}px`,
              }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const node = nodes.find((node) => node.position === index);
            const isSelected = selectedCell === index; // Проверяем, выделена ли клетка
            const hasNode = !!node; // Проверяем, есть ли нода на клетке

            return (
              <div
                key={index}
                onClick={() => handleCellClick(index)}
                className="border border-green-200 box-border flex items-center justify-center"
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                  backgroundColor: isSelected
                    ? hasNode
                      ? "cyan" // Если выбрана клетка с нодой
                      : "yellow" // Если выбрана пустая клетка
                    : "transparent", // Прозрачная, если не выбрана
                  color: hasNode ? "white" : "black", // Контрастный текст для нод
                }}
              >
                {node ? (
                  node.type in nodeComponents ? (
                    React.createElement(nodeComponents[node.type], {
                      position: index,
                      onDelete: () => handleDeleteNode(index),
                      serverSpeed: serverSpeed, // Передаём текущую скорость сервера
                    })                    
                  ) : (
                    "Неизвестная нода"
                  )
                ) : (
                  index
                )}
              </div>
            );
          })}
          </div>

          <ServerSpeedPanel/> {/* Панель скорости сервера */}
          <TimePanel /> {/* Панель времени */}
          <Help /> {/* Подсказка */}
          <ShowCoordinates selectedCoordinates={selectedCoordinates} /> {/* Вывод координат */}
          {showPanel && (<NodesPanel isVisible={isVisible} onAddNode={handleAddNode} />)} {/* Панель нодов */}
        </div>
      </div>
    </div>
  );
}
