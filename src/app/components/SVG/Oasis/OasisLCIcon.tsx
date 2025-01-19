// OasisLCIcon.tsx
import React from 'react';

interface OasisLIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
  onClick?: () => void;
}

const OasisLIcon: React.FC<OasisLIconProps> = ({
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
      <g clipPath="url(#clip0_010_3)">
        <path d="M99.5 99.5H0.5V0.5H99.5V99.5Z" fill="#A0BE3C" stroke="black"/>
        <path d="M1.20711 99.5L99.5 1.20711V99.5H1.20711Z" fill="#FFF713" stroke="black"/>
      </g>
        <defs>
            <clipPath id="clip0_010_3">
            <rect width="100" height="100" fill="none"/>
            </clipPath>
        </defs>
    </svg>
);
};

export default OasisLIcon;