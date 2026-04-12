"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardProp {
  title: string;
  thumbnailSrc: string;
  description: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  dataIndex: number;
}

function Card({
  description,
  thumbnailSrc,
  title,
  imgAlt,
  imgHeight,
  imgWidth,
  dataIndex,
}: CardProp) {
  return (
    <div
      className="bg-dark-600 w-[95%] md:w-full h-fit flex justify-center border border-base-500 rounded-3xl shrink-0"
      data-index={dataIndex}
    >
      <div className="w-full h-fit border border-base-400 rounded-3xl m-1 flex flex-col justify-center">
        <Image
          src={thumbnailSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
          className="my-6 w-full h-full px-13"
        />
        <h2 className="text-base-200 font-medium text-[22px]/8 pl-4 md:px-10">
          {title}
        </h2>
        <p className="text-base-300 text-xl pl-4 mt-1.5 mb-10 md:px-10 [word-spacing:2]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ValueProposition2() {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // this finds what carousel item is currently being shown and updates the index indictor below it accordingly
  useEffect(() => {
    const container = carouselContainer.current;
    if (!container) return;

    const items = Array.from(container.children);
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
    )
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  interface CardsType {
    thumbnailSrc: string;
    title: string;
    description: string;
  }
  const cards: CardsType[] = [
    {
      title: "Quick actions",
      description: "Streamline your workflow with customizable shortcuts.",
      thumbnailSrc: "./Quick actions.svg",
    },
    {
      title: "Automatic enrichment",
      description:
        "Update your contacts with the latest information on autopilot.",
      thumbnailSrc: "./Automatic enrichment.svg",
    },
    {
      title: "Chrome extension",
      description: "Stay lean with Attio’s lightweight browser extension.",
      thumbnailSrc: "./Chrome extension.svg",
    },
    {
      title: "Contact analysis",
      description: "Get deeper insights into your contacts at a single glance.",
      thumbnailSrc: "./Contact analysis.svg",
    },
    {
      title: "Filters",
      description: "Streamline your workflow with customizable shortcuts.",
      thumbnailSrc: "./Filters.svg",
    },
    {
      title: "Tierd sorting",
      description: "Update your contacts with the latest information on.",
      thumbnailSrc: "./Tiered Sorting.svg",
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-base-300 font-gillroy font-bold text-3xl pt-15 md:pt-29 md:text-[58px]/13">
        And so <span className="text-base-100">much more...</span>
      </h2>
      <p className="text-base-200 text-[22px]/8 font-thin font-inter mt-5 [word-spacing:2]">
        Your customers are always connected.
        <br /> Why should your CRM be any different?
      </p>
      <div className="flex justify-center">
        <div
          className="pt-30 ml-5 flex gap-15 overflow-x-scroll hide-scrollbar md:grid md:grid-cols-3"
          ref={carouselContainer}
        >
          {cards.map((card, i) => {
            return (
              <Card
                {...card}
                imgWidth={290}
                imgHeight={150}
                imgAlt="a image showcasing Quick Actions"
                dataIndex={i}
                key={card.title}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-6 pb-15 md:hidden">
        {Array.from({ length: 6 }).map((_, i) => {
          return (
            <div
              className={`w-2 h-2 rounded-md ${carouselIndex === i ? "bg-alt-blue-600" : "bg-base-500"}`}
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
