import Image from "next/image";
import { ReactElement, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Testimonial() {
  const testimonials = [
    {
      message: (
        <>
          We use @attio on a daily basis for several
          <br /> internal processes, and I cannot rave
          <br /> enough about them. Incredible flexibility
          <br /> and features combined with super intuitive UI
        </>
      ),
      userPfpSrc: "./iamsebdeb.svg",
      userName: "Sebastiaan Debrouwere",
      userNameTag: "@iamsebdeb",
      platformIconSrc: "./logos/twitter.svg",
      timePosted: "10:01 PM · Apr 7, 2022",
    },
    {
      message: (
        <>
          Holy shit @attio is beautiful 😍 I&apos;ve run
          <br />
          my CRM on Notion to date. Hubspot &<br /> Salesforce too clunky. Sleek
          and simple,
          <br /> just what I need
        </>
      ),
      userPfpSrc: "./ntkris.svg",
      userName: "Khrisna",
      userNameTag: "@ntkris",
      platformIconSrc: "./logos/twitter.svg",
      timePosted: "10:22 PM · Mar 3, 2023",
    },
    {
      message: (
        <>
          As an early stage startup I’m really loving using
          <br />
          @attio - great balance of flexibility and
          <br /> prescriptiveness
        </>
      ),
      userPfpSrc: "./alon.svg",
      userName: "Alon",
      userNameTag: "@alon",
      platformIconSrc: "./logos/twitter.svg",
      timePosted: "6:57 PM · Dec 1, 2022",
    },
    {
      message: (
        <>
          Let&apos;s be honest, most CRMs suck.
          <br /> Overcomplicated, expensive, and you
          <br />
          have to bend to their will...not the other
          <br /> way around. I am a huge fan of @attio -<br /> their product is
          rock-solid, customer
          <br /> support is AAA, and it is *very* flexible
          <br /> and simple.
        </>
      ),
      userPfpSrc: "./villa_gouse.svg",
      userName: "Villa Gouse",
      userNameTag: "@villa_gouse",
      platformIconSrc: "./logos/twitter.svg",
      timePosted: "4:05 PM · Dec 1, 2022",
    },
    {
      message: (
        <>
          We use our CRM @attio for sales,
          <br />
          fundraising, and recruiting. It&apos;s awesome
        </>
      ),
      userPfpSrc: "./smith_alexandra.svg",
      userName: "Alexandra Smith",
      userNameTag: "@smith_alexandra",
      platformIconSrc: "./logos/twitter.svg",
      timePosted: "1:32 PM · Jan 4, 2023",
    },
    {
      message: (
        <>
          I&apos;ve been using @attio to track
          <br /> applicants, manage my deal pipeline and
          <br /> manage the associated notes/tasks. The
          <br /> use-cases are unlimited; it truly feels like the
          <br /> Notion of CRM.
        </>
      ),
      userPfpSrc: "./damian09.svg",
      userName: "Damian",
      userNameTag: "@damian09",
      platformIconSrc: "./logos/twitter.svg",
      timePosted: "2:21 PM · Jan 9, 2023",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 639px)");

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <h2 className="text-base-300 font-gillroy font-bold text-3xl pt-15 md:pt-60 md:text-[52px]/14.5">
        Loved by <span className="text-base-100">Builders.</span>
      </h2>
      <p className="text-base-200 text-xl/6.5 font-thin font-inter mt-5 [word-spacing:4] max-w-sm md:max-w-xl">
        Attio is the customer relationship management tool for everyone who
        values collaboration.
      </p>
      <div className="border w-fit border-base-500 rounded-2xl mt-8">
        <p className="text-base-200 px-5 py-4 text-lg/6">
          More customer stories
        </p>
      </div>
      <div className="py-15 relative">
        <span className="flex flex-col md:grid md:grid-cols-3 gap-y-6 md:gap-x-5">
          {isExpanded || !isMobile
            ? testimonials.map((val, index) => {
                // Determine the class based on the index
                const itemClass = index < 3 ? "md:items-end" : "md:items-start";
                // Combine with existing classes if any.
                const combinedClasses = index === 5 || index === 4 ? "md:-mt-9" : `${itemClass}`;
                return (
                  <div key={val.timePosted} className={combinedClasses}>
                    <Card {...val} />
                  </div>
                );
              })
            : testimonials.slice(0, 2).map((val) => {
                return (
                  <div key={val.timePosted}>
                    <Card {...val} />
                  </div>
                );
              })}
        </span>

        <div className="sm:hidden">
          {!isExpanded && (
            <div className="w-full flex justify-center items-center absolute bottom-0 bg-linear-to-t h-[65%] from-base-600 via-base-600">
              <button
                className="text-base-100 text-base/5 py-2.5 mt-10 cursor-pointer border px-9 rounded-xl border-base-500 h-fit bg-base-600"
                onClick={() => setIsExpanded(true)}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface CardProp {
  userPfpSrc: string;
  platformIconSrc: string;
  userName: string;
  userNameTag: string;
  message: string | ReactElement;
  timePosted: string;
}

function Card({
  message,
  platformIconSrc,
  timePosted,
  userName,
  userNameTag,
  userPfpSrc,
}: CardProp) {
  return (
    <div className="bg-dark-600 h-fit flex justify-center border border-base-500 rounded-3xl shrink-0 md:block">
      <div className="w-full h-fit border border-base-600 rounded-3xl m-1 flex flex-col justify-center px-6  pt-6">
        <div className="flex relative">
          <Image
            src={userPfpSrc}
            width={34}
            height={34}
            alt={`profile picture of ${userNameTag}`}
            className="w-auto h-auto"
          />
          <div className="ml-2">
            <h3 className="text-base-300">{userName}</h3>
            <h3 className="text-base-400">{userNameTag}</h3>
          </div>
          <div className="absolute right-0">
            <Image
              src={platformIconSrc}
              width={24}
              height={24}
              alt="the twitter logo"
              className="mt-2 w-auto h-auto"
            />
          </div>
        </div>
        <p className="text-base-200 text-xl/6 sm:text-2xl mt-6">{message}</p>
        <p className="my-6 text-base-400 font-medium">{timePosted}</p>
      </div>
    </div>
  );
}
