// MovingIcon.tsx
import React from 'react';

interface MovingIconProps {
  size?: string; // Размер иконки
  colorPrimary?: string; // Основной цвет прямоугольника
  colorSecondary?: string; // Основной цвет элементов
  strokeColor?: string; // Цвет обводки прямоугольника
  onClick?: () => void;
}

const MovingIcon: React.FC<MovingIconProps> = ({
  size = "50",
  colorPrimary = "#b6ea94",
  colorSecondary = "#3a290c",
  strokeColor = "#215103",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <rect
        x="1"
        y="1.19"
        width="48"
        height="48"
        rx="5.89"
        ry="5.89"
        fill={colorPrimary}
        stroke={strokeColor}
        strokeWidth="1.46"
        strokeMiterlimit="10"
      />
      <path
        d="M41.07,11.34h-3.29v10.86h4.29v-9.86c0-.55-.45-1-1-1Z"
        fill={colorSecondary}
      />
      <path
        d="M23.86,9.19h2.28v13h-2.28v-13Z"
        fill={colorSecondary}
      />
      <path
        d="M35.79,11.34h-1.3c-1.85,0-3.68-.43-5.34-1.26l-1-.5v12.62h7.64v-10.86Z"
        fill={colorSecondary}
      />
      <path
        d="M7.93,29.42c1.53-1.8,3.82-2.94,6.36-2.94,4.61,0,8.36,3.75,8.36,8.36,0,.34-.02.67-.06,1h4.83c-.04-.33-.06-.66-.06-1,0-4.61,3.75-8.36,8.36-8.36,2.54,0,4.82,1.14,6.36,2.94v-5.22H7.93v5.22Z"
        fill={colorSecondary}
      />
      <path
        d="M21.86,9.58l-1,.5c-1.66.83-3.48,1.26-5.34,1.26h-1.3v10.86h7.64v-12.62Z"
        fill={colorSecondary}
      />
      <path
        d="M12.21,11.34h-3.29c-.55,0-1,.45-1,1v9.86h4.29v-10.86Z"
        fill={colorSecondary}
      />
      <path
        d="M14.29,28.48c-3.51,0-6.36,2.85-6.36,6.36s2.85,6.36,6.36,6.36,6.36-2.85,6.36-6.36c0-3.51-2.85-6.36-6.36-6.36ZM16.58,31.13l-2.29,2.29-2.29-2.29c.67-.41,1.45-.65,2.29-.65s1.62.24,2.29.65ZM10.58,32.55l2.29,2.29-2.29,2.29c-.41-.67-.65-1.45-.65-2.29s.24-1.62.65-2.29ZM12,38.54l2.29-2.29,2.29,2.29c-.67.41-1.45.65-2.29.65s-1.62-.24-2.29-.65ZM17.99,37.13l-2.29-2.29,2.29-2.29c.41.67.65,1.45.65,2.29s-.24,1.62-.65,2.29Z"
        fill={colorSecondary}
      />
      <path
        d="M35.71,28.48c-3.51,0-6.36,2.85-6.36,6.36s2.85,6.36,6.36,6.36,6.36-2.85,6.36-6.36-2.85-6.36-6.36-6.36ZM38,31.13l-2.29,2.29-2.29-2.29c.67-.41,1.45-.65,2.29-.65s1.62.24,2.29.65ZM32.01,32.55l2.29,2.29-2.29,2.29c-.41-.67-.65-1.45-.65-2.29,0-.84.24-1.62.65-2.29ZM33.42,38.54l2.29-2.29,2.29,2.29c-.67.41-1.45.65-2.29.65s-1.62-.24-2.29-.65ZM39.42,37.13l-2.29-2.29,2.29-2.29c.41.67.65,1.45.65,2.29s-.24,1.62-.65,2.29Z"
        fill={colorSecondary}
      />
    </svg>
  );
};

export default MovingIcon;