import React, { useState } from "react";
import ModalNodaVillages from "../../../ModalNodaVillages"; // Модальное окно

const Nodes5436 = ({ position, onDelete, serverSpeed }: { position: number; onDelete: () => void; serverSpeed: number; }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [touchStartTimeout, setTouchStartTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDoubleClick = () => {
    setIsModalOpen(true); // Открываем модальное окно
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

  const handleTouchStart = () => {
    const timeout = setTimeout(() => {
      setIsAlertOpen(true); // Открываем окно выбора действий
    }, 500); // Длительное нажатие
    setTouchStartTimeout(timeout);
  };

  const handleTouchEnd = () => {
    if (touchStartTimeout) {
      clearTimeout(touchStartTimeout);
      setTouchStartTimeout(null);
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <>
      <div
        className="w-[30px] h-[30px] bg-yellow-300
                  border-2 border-solid border-black rounded box-border
                  text-black text-[10px] font-extrabold
                  flex items-center justify-center
                  cursor-pointer"
        onDoubleClick={handleDoubleClick} // Двойной клик открывает модальное окно
        onTouchStart={handleTouchStart} // Начало долгого нажатия
        onTouchEnd={handleTouchEnd} // Завершение долгого нажатия
      >
        <span>5436</span>
      </div>

      <ModalNodaVillages
        isOpen={isModalOpen}
        onClose={closeModal}
        title="5436"
        position={position}
        KplLumber={5}
        KplClay={4}
        KplIron={3}
        KplCrop={6}
        serverSpeed={serverSpeed} 
      />

      {isAlertOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-transparent"
          onClick={closeAlert} // Закрываем меню при клике по фону
        >
          <div
            className="flex flex-col items-center justify-center pb-[114px] gap-12"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
          >
              <button
                className="bg-gray-500 text-yellow-200 px-2 py-1
                          border-2 border-solid border-yellow-300 rounded-lg box-border"
                onClick={() => {
                  handleDoubleClick(); // Открываем модальное окно
                  closeAlert(); // Закрываем окно выбора
                }}
              >
                Изменить
              </button>
              <button
                className="bg-gray-500 text-yellow-200 px-2 py-1
                          border-2 border-solid border-yellow-300 rounded-lg box-border"
                onClick={() => {
                  onDelete(); // Удаляем ноду
                  closeAlert(); // Закрываем окно выбора
                }}
              >
                Удалить
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nodes5436;
