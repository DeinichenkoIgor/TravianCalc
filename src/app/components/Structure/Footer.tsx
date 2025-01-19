// src/app/components/Structure/Footer.tsx
"use client";
import Link from "next/link";
import Icon from "../SVG/Icon";

const Footer = () => {
  return (
    <footer className="bg-[#A0BE3C] w-full">
      <div
        className="grid items-center justify-items-center my-1 mx-[52px] font-sans text-black/50 text-base font-bold"
      >
        <div
          className="flex items-center py-0.5 px-2 rounded-lg w-min hover:bg-white/30"
        >
            <Link
              className="flex justify-center items-center rounded-lg "
              href="https://discord.gg/kpHjJgrVjS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Social.Discord size="24px" />
            </Link>       
        </div>
        
      </div>
    </footer>
  );
};

export { Footer };
