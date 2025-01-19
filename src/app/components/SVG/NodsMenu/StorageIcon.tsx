// StrogeIcon.tsx
import React from 'react';

interface StrogeIconProps {
  size?: string; // Размер иконки
  colorPrimary?: string; // Основной цвет прямоугольника
  colorSecondary?: string; // Цвет основных фигур
  strokeColor?: string; // Цвет обводки
  onClick?: () => void; // Обработчик клика
}

const StrogeIcon: React.FC<StrogeIconProps> = ({
  size = "50",
  colorPrimary = "#edab70",
  colorSecondary = "#3a290c",
  strokeColor = "#ff7f00",
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
        y="1"
        width="48"
        height="48"
        rx="5.89"
        ry="5.89"
        fill={colorPrimary}
        stroke={strokeColor}
        strokeWidth="1.46"
        strokeMiterlimit="10"
      />
      <g>
        <path
          d="M8.71,18.18c-.33.23-.41.68-.18,1s.68.41,1,.18l15.47-10.77,15.48,10.65c.33.23.77.14,1-.18s.14-.77-.18-1l-15.84-10.9c-.24-.2-.6-.22-.87-.03h0s-15.88,11.05-15.88,11.05Z"
          fill={colorSecondary}
        />
        <path
          d="M35.42,41.97l4.42.03v-22.44l-14.84-10.21-14.84,10.33v22.32h4.42v-19.8h20.84v19.77h0ZM25,13.87c1.53,0,2.78,1.24,2.78,2.78s-1.24,2.78-2.78,2.78-2.78-1.24-2.78-2.78,1.24-2.78,2.78-2.78h0Z"
          fillRule="evenodd"
          fill={colorSecondary}
        />
        <path
          d="M15.97,35.05h6.95v6.95h-6.95v-6.95Z"
          fillRule="evenodd"
          fill={colorSecondary}
        />
        <path
          d="M24.31,35.05h6.95v6.95h-6.95v-6.95Z"
          fillRule="evenodd"
          fill={colorSecondary}
        />
        <path
          d="M15.97,27.38h6.95v6.95h-6.95v-6.95Z"
          fillRule="evenodd"
          fill={colorSecondary}
        />
      </g>
    </svg>
  );
};

export default StrogeIcon;