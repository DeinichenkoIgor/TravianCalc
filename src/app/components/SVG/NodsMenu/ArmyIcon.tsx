// ArmyIcon.tsx
import React from 'react';

interface ArmyIconProps {
  size?: string; // Размер иконки
  colorPrimary?: string; // Основной цвет первого элемента
  colorSecondary?: string; // Основной цвет второго элемента
  strokeColor?: string; // Цвет обводки
  onClick?: () => void;
}

const ArmyIcon: React.FC<ArmyIconProps> = ({
  size = "50",
  colorPrimary = "#f29f99",
  colorSecondary = "#3a290c",
  strokeColor = "#ff2400",
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
      <path
        d="M10.28,24.1c0-3.51,1.25-6.9,3.53-9.56,1.83-2.14,4.22-3.7,6.87-4.52v12.52h-5.85v3.97c0,1.86.84,3.61,2.27,4.76v11.21l-6.82-4.55v-13.85h0Z"
        fill={colorSecondary}
      />
      <path
        d="M32.91,31.29c1.43-1.16,2.27-2.9,2.27-4.76v-3.97h-5.85v-12.52c2.65.82,5.05,2.38,6.87,4.52,2.27,2.66,3.53,6.06,3.53,9.56v13.85l-6.82,4.55v-11.21Z"
        fill={colorSecondary}
      />
      <path
        d="M19.15,30.22l-.46-.3c-1.14-.76-1.82-2.03-1.82-3.39v-1.92h3.8v2.27h8.65v-2.27h3.8v1.92c0,1.37-.68,2.64-1.82,3.39l-.46.3v8.63h-11.71v-8.63h0Z"
        fill={colorSecondary}
      />
      <path
        d="M22.73,7.5h4.55v17.32h-4.55V7.5Z"
        fill={colorSecondary}
      />
    </svg>
  );
};

export default ArmyIcon;