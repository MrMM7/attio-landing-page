"use client";
import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ValuePropositionProps {
  title: string;
  description: string | ReactElement;
  isCarousel?: boolean;
  cards: ReactNode;
  testimonialsName: string;
  testimonialAvatarSrc: string;
  testimonialSpeach: string | ReactElement;
  className?: string;
  testimonialsRole?: string;
}

export default function ValueProposition({
  title,
  description,
  isCarousel = false,
  cards,
  testimonialsName,
  testimonialAvatarSrc,
  testimonialSpeach,
  className = "",
  testimonialsRole = "Founder",
}: ValuePropositionProps) {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // this finds what carousel item is currently being shown and updates the index indictor below it accordingly
  useEffect(() => {
    const container = carouselContainer.current;
    if (!container || !isCarousel) return;
    const firstElement = container.firstElementChild?.firstElementChild;
    let items;
    // Check if the first element exists and has children
    if (firstElement && firstElement.children) {
      // Get the children of the first element
      items = [...firstElement.children];
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = Number(target.dataset.index);
            setCarouselIndex(index);
          }
        });
      },
      { threshold: 0.5 },
    );
    if (!items) return;
    items.forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [carouselIndex, isCarousel]);

  return (
    <div>
      <div className={`${className} flex flex-col items-start md:ml-23 `}>
        <div className="flex items-start gap-10">
          <Image
            src="./Box.svg"
            width={40}
            height={40}
            alt="Box icon"
            className="w-auto h-auto"
          />
          <h2 className="font-semibold font-gillroy ml-2 text-4xl md:max-w-xl md:text-[52px] text-base-600">
            {title}
          </h2>
        </div>
        <p className="w-full mt-5 text-xl/7.5 tracking-[-0.2px] font-inter text-base-500 font-thin [word-spacing:4] md:max-w-160 pl-20 md:pl-23">
          {description}
        </p>
      </div>
      {isCarousel ? (
        <>
          <div className="mt-17 w-[80%] flex relative overflow-auto hide-scrollbar m-auto">
            <div className="flex hide-scrollbar w-full" ref={carouselContainer}>
              {cards}
            </div>
          </div>
          <div className="mt-6 gap-1 flex justify-center md:hidden">
            {Array.from({
              length: 4,
            }).map((_, i) => {
              return (
                <span
                  className={`${carouselIndex === i ? "bg-base-300" : "bg-base-200"} w-5.5 h-1 rounded-md`}
                  key={i}
                ></span>
              );
            })}
          </div>
        </>
      ) : (
        <div className="mt-17 w-[80%] m-auto flex flex-col gap-6">{cards}</div>
      )}
      <div className="mt-16 flex flex-col mr-auto ml-11 md:ml-0 w-full md:items-center">
        <Image
          src={testimonialAvatarSrc}
          width={44}
          height={44}
          alt={`attio ${testimonialsRole}'s image`}
        />
        <p className="mt-6 text-xl/7.5 text-base-600 tracking-[-0.2px] md:max-w-150 max-w-100 md:text-center md:text-[22px]/8">
          {testimonialSpeach}
        </p>
        <p className="mt-6 text-base-500 text-sm/5 tracking-[-0.1px]">
          {testimonialsName}
        </p>
        <p className="text-base-400 text-sm/5 tracking-[-0.1px]">
          {testimonialsRole}
        </p>
      </div>
    </div>
  );
}
