"use client";

import Link from 'next/link';
import Icon from '../SVG/Icon';

const Header = () => {
   
  return (
    <header className="z-50 bg-[#82D2F3] sticky top-0">
      <div
        className="flex items-center mx-auto py-0 justify-between
               h-[30px] xl:px-[52px] md:px-[40px] sm:px-[30px] px-[20px]
               font-sans text-black text-sm font-bold"
      >
        <div className="pr-[100px]">
          <div className="flex justify-center items-center">
            <Link className="flex justify-center items-center rounded-md px-3.5 hover:bg-black/30" href="/">
              <span className="whitespace-nowrap">TRAVIAN WORLD</span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex items-center gap-[50px]">
            <div className="flex relative h-full items-center">
              <Link className="flex py-0.5 px-3.5 hover:bg-white/30 hover:rounded-md hover:text-black" href="/Planner">
                Planner
              </Link>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </header>
  );
};

export { Header };
