import { useState } from "react";

export default function TimePanel() {
  const [timeValue, setTimeValue] = useState(1); // Значение числового инпута
  const [timeUnit, setTimeUnit] = useState("Час"); // Текущее значение выпадающего списка

  // Обработчик изменения значения
  const handleTimeChange = (value: string) => {
    const numericValue = Math.min(999, Math.max(0, Number(value))); // Ограничиваем значение до 3 цифр
    setTimeValue(numericValue);
  };

  // Обработчик изменения единицы времени
  const handleUnitChange = (value: string) => {
    setTimeUnit(value);
  };

  return (
    <div  className="absolute bg-gray-500/80 text-black flex items-center justify-center
                      w-[180px] h-[40px] rounded-b-lg top-0 left-[130px] z-[2]" >
      <div className="flex gap-x-2">
        {/* Инпут для чисел */}
        <input
          type="number"
          value={timeValue}
          onChange={(e) => handleTimeChange(e.target.value)}
          className="flex justify-center items-center bg-white h-[20px] w-[50px] rounded text-sm text-center"
          min="0"
          max="999"
          placeholder="1"
        />
        {/* Выпадающий список времени */}
        <select
          value={timeUnit}
          onChange={(e) => handleUnitChange(e.target.value)}
          className="flex justify-center items-center bg-white h-[20px] w-[80px] rounded text-sm"
        >
          <option value="Час">Час</option>
          <option value="Сутки">Сутки</option>
          <option value="Неделя">Неделя</option>
          <option value="Месяц">Месяц</option>
        </select>
      </div>
    </div>
  );
}
