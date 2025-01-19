// LogoIcon.tsx
import React from 'react';

interface LogoIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
  onClick?: () => void;
}

const LogoIcon: React.FC<LogoIconProps> = ({
  size = "1000",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
  onClick
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} // Добавляем обработчик события onClick
      style={{ cursor: 'pointer' }} // Добавляем указатель курсора для указания кликабельности
    >
      <g clipPath="url(#clip0_999_9)">
      <path d="M555.522 687.62L544.974 640.1L540 538.308L594.75 396.154L579.256 382.04L622.125 325.077L649.5 254L759 294.615L832 497.692L905 254H978L905 741.385L759 782L686 538.308L613 782L592.441 749.66L575.3 727.22L555.522 687.62Z" fill="#CCF939" stroke="#506800" stroke-width="8"/>
      <path d="M906 254L833 497.692L760 782L906 741.385L924.25 619.539H946.754L942.5 497.692L979 254H906Z" fill="#A5D604" stroke="#506800" stroke-width="8"/>
      <path d="M394 254H467L576.5 578.923H613V782H467L448.75 690.615H421.124L430.5 599.231L394 416.462V254Z" fill="#B4E905" stroke="#506800" stroke-width="8"/>
      <path d="M96.1875 258.281H418V372.062H276.182H272.182V376.062V778H170.818V579.031V578.568L170.712 578.118L148.062 481.547H166.818H170.818V477.547V376.062V372.062H166.818H25V254.281V224.371L94.4492 257.883L95.2729 258.281H96.1875Z" fill="#FDE902" stroke="#9F5719" stroke-width="8"/>
      <path d="M419.072 258L469.837 371.846H403.238H276.143H272.143V375.846V531.2V532.558L272.97 533.636L286.83 551.692L272.386 591.207L272.143 591.872V592.58V743.72V745.136L273.035 746.237L298.753 778H171.56L218.297 422.161L218.299 422.151L226.197 360.771L226.205 360.713L226.21 360.655L236.384 258H419.072Z" fill="#FFEB02" stroke="#9F5719" stroke-width="8"/>
      </g>
            <defs>
              <clipPath id="clip0_999_9">
                <rect width="1000" height="1000" fill="none"/>
              </clipPath>
            </defs>
          </svg>
        );
      };

      export default LogoIcon;