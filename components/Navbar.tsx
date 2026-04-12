"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import StartButton from "./StartButton";

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);

  const navbarItems = [
    { title: "Customer", href: "#", counter: null },
    { title: "Changelog", href: "#", counter: null },
    { title: "Help", href: "#", counter: null },
    { title: "Careers", href: "#", counter: 4 },
    { title: "Pricing", href: "#", counter: null },
  ];
  return (
    <nav className="flex relative flex-col md:flex-col-reverse gap-4">
      <div className="flex">
        <Image
          src="./logo.svg"
          width={90}
          height={36}
          alt="attio company logo"
        />
        <Image
          src="./menu.svg"
          width={32}
          height={32}
          alt="attio company logo"
          className="right-0 absolute md:hidden"
        />
        <div className="md:flex gap-8 ml-20 items-center hidden">
          {navbarItems.map((val) => {
            return (
              <Link
                href={val.href}
                className="flex items-center"
                key={val.title}
              >
                <h2 className="text-base-600 hover:text-base-400 duration-150 transition">{val.title}</h2>
                {val.counter && (
                  <span className="bg-base-600 ml-1 rounded-full h-fit font-semibold text-[10px] text-white px-1">
                    {val.counter}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
        <div className="md:flex hidden ml-auto">
          <button className="px-4 py-2 mr-3 text-base-500 cursor-pointer rounded-xl">
            Sign In
          </button>
          <StartButton />
        </div>
      </div>
      {showBanner && (
        <div className="bg-base-600 w-full text-white flex justify-center py-2 md:py-0 rounded-2xl relative">
          <p className="text-center max-w-xs md:max-w-2xl md:py-4">
            We&apos;ve raised a $23.5m Series A led by Redpoint Ventures!{" "}
            <a href="#" className="font-semibold underline">
              Read more
            </a>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            aria-label="cancel button"
          >
            <Image
              src="./cancel.svg"
              width={20}
              height={20}
              alt="cancel button"
              className="cursor-pointer absolute top-4.5 right-5"
            />
          </button>
        </div>
      )}
    </nav>
  );
}
