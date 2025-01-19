import React, { useState } from "react";
import ModalNodaAccumulate from "../../../ModalNodaAccumulate"; // Модальное окно

const NodesAccumulate = ({ position, onDelete }: { position: number; onDelete: () => void }) => {
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
        className="w-[30px] h-[30px] bg-orange-300
                  border-2 border-solid border-black rounded box-border
                  text-black text-[11px] font-extrabold
                  flex items-center justify-center
                  cursor-pointer"
        onDoubleClick={handleDoubleClick} // Двойной клик открывает модальное окно
        onTouchStart={handleTouchStart} // Начало долгого нажатия
        onTouchEnd={handleTouchEnd} // Завершение долгого нажатия
      >
        <span>Acm</span>
      </div>

      <ModalNodaAccumulate
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Acm"
        position={position}
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
                className="bg-gray-500 text-orange-200 px-2 py-1
                          border-2 border-solid border-orange-300 rounded-lg box-border"
                onClick={() => {
                  handleDoubleClick(); // Открываем модальное окно
                  closeAlert(); // Закрываем окно выбора
                }}
              >
                Изменить
              </button>
              <button
                className="bg-gray-500 text-orange-200 px-2 py-1
                          border-2 border-solid border-orange-300 rounded-lg box-border"
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

export default NodesAccumulate;
