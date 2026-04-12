"use client";
import CTA2 from "../components/CTA2";
import Testimonial from "../components/Testimonial";
import ValueProposition2 from "../components/ValueProposition2";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Proven from "../components/Proven";
import ValueProposition from "../components/ValueProposition";

import InfoCard from "@/components/InfoCard";
import Image from "next/image";

import { useState } from "react";

interface CardsOneType {
  title: string;
  description: string;
  mobileIconSrc?: string;
  pcIconSrc?: string;
  index?: number;
  currentIndex?: number;
  invert?: boolean
}

export default function Home() {
  const [pcCarouselIndex, setPCCarouselIndex] = useState(0);
  const cardsOneInfo: CardsOneType[] = [
    {
      title: "Build",
      description:
        "Create your dream CRM with powerful, flexible templates for every use case.",
      mobileIconSrc: "./grid.svg",
      pcIconSrc: "./copy.svg",
    },
    {
      title: "Refine",
      description:
        "Use Attio’s intuitive UI and ultra-customizable blocks to craft your ideal workflows.",
      mobileIconSrc: "./grid.svg",
      pcIconSrc: "./copy.svg",
    },
    {
      title: "Work",
      description:
        "Help your business scale with enriched data, custom attributes, and integrations.",
      mobileIconSrc: "./shiny.svg",
      pcIconSrc: "./shiny.svg",
    },
    {
      title: "Report",
      description:
        "Analyze, track and share reports built on real-time data from across your workspace.",
      mobileIconSrc: "./chart.svg",
      pcIconSrc: "./chart.svg",
    },
  ];

  const cardsOne = (
    <div className="w-full">
      <div className="md:hidden flex">
        {cardsOneInfo.map((val, i) => {
          return (
            <InfoCard
              title={val.title}
              description={val.description}
              iconSrc={val.mobileIconSrc}
              thumnailSrc="./CRM Graphic.svg"
              dataIndex={i}
              key={val.description}
            />
          );
        })}
      </div>
      <div className="hidden md:block">
        <div className="mt-9 md:flex gap-6 justify-center">
          {cardsOneInfo.map((val, i) => {
            return (
              <span onClick={() => setPCCarouselIndex(i)} key={val.description}>
                <PCInfoCard {...val} index={i} currentIndex={pcCarouselIndex} invert={i > 1 && true} />
              </span>
            );
          })}
        </div>
        <div className="flex justify-center mt-16">
          <Image
            src="./PC CRM 1 Graphic.svg"
            width={1026}
            height={403}
            alt="a graphic showcasing the feature"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );

  const integrations = [
    {
      id: crypto.randomUUID(),
      src: "./Fivetran.svg",
      width: 12,
      height: 20,
      alt: "Logo of Fivetran",
    },
    {
      id: crypto.randomUUID(),
      src: "./Hightouch.svg",
      width: 18,
      height: 18,
      alt: "Logo of Hightouch",
    },
    {
      id: crypto.randomUUID(),
      src: "./Census.svg",
      width: 22,
      height: 20,
      alt: "Logo of Census",
    },
    {
      id: crypto.randomUUID(),
      src: "./Segment.svg",
      width: 18,
      height: 18,
      alt: "Logo of Segment",
    },
    {
      id: crypto.randomUUID(),
      src: "./Outlook.svg",
      width: 20,
      height: 17,
      alt: "Logo of Outlook",
    },
    {
      id: crypto.randomUUID(),
      src: "./Gmail.svg",
      width: 16,
      height: 12,
      alt: "Logo of Gmail",
    },
  ];

  const cardsTwo = (
    <>
      <span className="md:hidden">
        <InfoCard
          title="Always connected to your data. "
          description="Continually sync your product, billing, and relationship data into your workspace."
          thumnailSrc="./Workplace Graphic.svg"
          titleConcat={true}
          showImageBorder={false}
        />
      </span>
      <span>
        <InfoCard
          title="Always connected to your data. "
          description="Continually sync your product, billing, and relationship data into your workspace."
          thumnailSrc="./Data 1 Graphic.svg"
          titleConcat={true}
          showImageBorder={false}
        />
      </span>
      <div className="flex items-stretch gap-7 md:flex-row flex-col">
        <div className="flex-1">
          <InfoCard
            className="h-full"
            title={
              <>
                A CRM for any use case.
                <br />
              </>
            }
            description={
              <p className="text-base">
                Easily create custom objects that match your business&apos;
                unique data structure.
              </p>
            }
            thumnailSrc="./CRM 2 Graphic.svg"
            titleConcat={true}
            limitThumbnailSize={false}
            showImageBorder={false}
          />
        </div>

        <div className="flex flex-col gap-7">
          <div className="bg-dark-100 p-1.5 border rounded-3xl border-base-200">
            <Image
              src="./CRM 4 Graphic.svg"
              width={500}
              height={450}
              alt="Graphic of 'Workspace dropdown'"
            />
          </div>
          <div className="bg-dark-100 rounded-2xl border border-base-200 p-1.5">
            <div className="border border-dark-200 w-full rounded-2xl px-3 flex items-center py-4 justify-between">
              {integrations.map((val) => {
                return (
                  <div
                    className="border border-dark-200 flex justify-center items-center rounded-lg w-9 h-9 cursor-pointer active:cursor-default active:scale-100 transition duration-200 md:scale-115"
                    key={val.id}
                  >
                    <Image
                      src={val.src}
                      width={val.width}
                      height={val.height}
                      alt={val.alt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const cardsThree = (
    <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-2 grid-cols-1 gap-6">
      <div className="col-span-3 md:hidden">
        <InfoCard
          title="Real-time collaboration."
          description="Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time."
          thumnailSrc="./MP 1 Graphic.svg"
        />
      </div>
      <div className="md:col-span-3 hidden md:grid">
        <InfoCard
          title="Real-time collaboration."
          description="Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time."
          thumnailSrc="./PC MP 1 Graphic.svg"
        />
      </div>
      <div className="col-span-2">
        <InfoCard
          title="Build from anywhere. "
          description="Our world-class mobile app lets you collaborate from anywhere without compromising your workflow."
          thumnailSrc="./MP 2 Graphic.svg"
          className="justify-center"
          limitThumbnailSize={false}
          showImageBorder={false}
          titleConcat
        />
      </div>
      <div className="col-span-2">
        <InfoCard
          title="Permission control. "
          description="Control how your team interacts with your business’s collections, views, and emails."
          thumnailSrc="./MP 3 Graphic.svg"
          limitThumbnailSize={false}
          showImageBorder={false}
          titleConcat
        />
      </div>
      <div className="col-span-3">
        <InfoCard
          title="Hold that thought. "
          description="Never lose another idea with Attio’s real-time collaborative note-taking features."
          thumnailSrc="./MP 4 Graphic.svg"
          showImageBorder={false}
          className="mb-9"
          titleConcat
        />
      </div>
    </div>
  );
  
  return (
    <div>
      <Hero />
      <div>
        <Proven />
        <ValueProposition
          title="A CRM created to be your own."
          description="Tweak anything and everything to ensure Attio fits your business, not the other way around."
          cards={cardsOne}
          isCarousel={true}
          testimonialAvatarSrc="./Avatar.svg"
          testimonialSpeach={
            "“My team loves Attio’s reporting system because it’s so dynamic. We can splice our data in so many different ways and combinations.”"
          }
          testimonialsName="DeGrasse Schrader"
          testimonialsRole="Chief of Staff, Pallet"
          className="mt-22.5 md:mt-52"
        />
        <ValueProposition
          title="Modeled around your data and workflows."
          description={
            <span>
              A CRM should go beyond deals. Attio is
              built for any business process.
            </span>
          }
          cards={cardsTwo}
          testimonialAvatarSrc="./Avatar 2.svg"
          testimonialSpeach={
            <>
              “Attio is an incredibly flexible product, you can build anything
              on it. It gives you the tools you need to build a CRM that’s
              exactly right to your business, your data, and your processes.”
            </>
          }
          testimonialsName="Filip Mark"
          testimonialsRole="Chief of Staff, Passionfroot"
          className="mt-25"
        />
        <ValueProposition
          title="Designed for multiplayer."
          description="The first truly multiplayer CRM. After all, the best work doesn’t come from silos."
          className="mt-35"
          testimonialsRole="Co-founder & CEO, Dopt"
          testimonialsName="Alon Bartur"
          testimonialSpeach="“Attio has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything.”"
          cards={cardsThree}
          testimonialAvatarSrc="./Avatar 3.svg"
        />
      </div>
      <CTA />
      <div className="-mx-6 md:px-23.5 px-6 bg-base-600 ">
        <ValueProposition2 />
        <Testimonial />
      </div>
      <div className="-mx-6">
        <CTA2 />
      </div>
    </div>
  );
}

function PCInfoCard({
  description,
  title,
  pcIconSrc = "",
  invert = false,
  index,
  currentIndex,
}: CardsOneType) {
  return (
    <div
      className={`font-medium ${currentIndex !== index && "opacity-50"} transition duration-200 cursor-pointer active:cursor-default`}
    >
      <div className="flex gap-1">
        <Image src={pcIconSrc} width={20} height={20} alt="Icon" className={invert ? "invert-100" : ""} />
        <h3 className=" text-lg text-base-600">{title}</h3>
      </div>
      <p className="[word-spacing:3] max-w-2xs">{description}</p>
    </div>
  );
}
