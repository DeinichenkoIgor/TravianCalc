// VillagIcon.tsx
import React from 'react';

interface VillagIconProps {
  size?: string; // Размер иконки
  colorPrimary?: string; // Основной цвет первого элемента
  colorSecondary?: string; // Основной цвет второго элемента
  strokeColor?: string; // Цвет обводки
  onClick?: () => void;
}

const VillagIcon: React.FC<VillagIconProps> = ({
  size = "50",
  colorPrimary = "#f2eca5",
  colorSecondary = "#3a290c",
  strokeColor = "#fffa45",
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
        d="M18.29,31.19h2.36v2.28h-2.36v-2.28Z"
        fill={colorSecondary}
      />
      <path
        d="M25,18.39l-10.61,10.23c-.88.85-2.01,1.36-3.22,1.48v8.23c0,2.02,1.7,3.66,3.8,3.66h11.14c.57,0,1.03-.45,1.03-1v-9.67h4.57v9.67c0,.55.46,1,1.03,1h2.29c2.09,0,3.8-1.64,3.8-3.66v-8.23c-1.22-.12-2.35-.63-3.22-1.48l-10.61-10.23ZM22.71,34.46c0,.55-.46,1-1.03,1h-4.42c-.57,0-1.03-.45-1.03-1v-4.27c0-.55.46-1,1.03-1h4.42c.57,0,1.03.45,1.03,1v4.27Z"
        fill={colorSecondary}
      />
      <path
        d="M41.67,22.78l-3.94-3.8v-9.98c0-.55-.46-1-1.03-1h-4.42c-.57,0-1.03.45-1.03,1v3.72l-3.94-3.8c-.61-.59-1.43-.92-2.3-.92s-1.69.33-2.3.92l-14.37,13.86c-1.27,1.22-1.27,3.21,0,4.44.61.59,1.43.92,2.3.92s1.69-.33,2.3-.92l12.07-11.64,12.07,11.64c.61.59,1.43.92,2.3.92s1.69-.33,2.3-.92c.61-.59.95-1.38.95-2.22,0-.84-.34-1.63-.95-2.22h0Z"
        fill={colorSecondary}
      />
    </svg>
  );
};

export default VillagIcon;