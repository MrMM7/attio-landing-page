"use client"
import { ReactNode, useState } from "react";
import Image from "next/image";

interface DropdownProps {
  children: ReactNode;
  title: string;
}
export default function Dropdown({ children, title }: DropdownProps) {
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="relative w-full bg-dark-600 rounded-lg cursor-pointer active:cursor-default select-none">
      <div className="flex mx-5" onClick={() => setIsExpanded(prev => !prev)}>
        <h3 className="text-base-300 font-medium text-lg/6 py-4.5">
          {title}
        </h3>
        <Image src="./arrow.svg" width={10} height={6} alt="Arrow Icon" className={`ml-auto invert ${!isExpanded && "rotate-90"}`}/>
      </div>
      {isExpanded && (
        <div className="mx-5">
            {children}
        </div>
      )}
    </div>
  );
}
