// Villag5346Icon.tsx
import React from 'react';

interface Villag5346IconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
  onClick?: () => void;
}

const Villag5346Icon: React.FC<Villag5346IconProps> = ({
  size = "100",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
  onClick
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} // Добавляем обработчик события onClick
      style={{ cursor: 'pointer' }} // Добавляем указатель курсора для указания кликабельности
    >
      <g clipPath="url(#clip0_002_5346)">
      <path d="M99.5 99.5H0.5V0.5H99.5V99.5Z" fill="#F9F6A2" stroke="black"/>
      </g>
        <defs>
            <clipPath id="clip0_002_5346">
            <rect width="100" height="100" fill="none"/>
            </clipPath>
        </defs>
    </svg>
);
};

export default Villag5346Icon;