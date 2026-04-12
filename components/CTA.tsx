import HeroButtons from "./HeroButtons";
import Image from "next/image";

export default function CTA() {
  const securityBureaus = [
    {
      src: "./logos/GDPR.svg",
      width: 112,
      height: 48,
      alt: "certification of GDPR",
    },
    {
      src: "./logos/CCPA.svg",
      width: 112,
      height: 48,
      alt: "certification of CCPA",
    },
    {
      src: "./logos/ISO 9001.svg",
      width: 68,
      height: 80,
      alt: "certification of ISO 9001",
    },
    {
      src: "./logos/ISO27001.svg",
      width: 80,
      height: 80,
      alt: "certification of ISO27001",
    },
  ];

  return (
    <div className="mt-10 md:mt-52.5 flex flex-col md:flex-row items-center mb-21 md:mb-28">
      <div className="md:ml-45 flex flex-col items-center">
        <h2 className="mt-34.5 font-bold font-gillroy text-[32px]/9.5 md:text-[40px]/11 text-base-600">
          Scale with <span className="text-base-400">security</span>
        </h2>
        <p className="text-center text-lg/6 md:text-[20px]/6 text-base-600 max-w-sm mt-1.5">
          Attio is audited and certified by industry leading Third Party
          standards.
        </p>
        <div className="mt-5">
          <HeroButtons />
        </div>
      </div>
      <div className="mt-12.5 flex flex-col items-center md:ml-auto">
        <div className="md:hidden flex flex-col items-center">
          <div className="flex gap-x-8">
            {securityBureaus.slice(0, 2).map((val) => {
              return <Image {...val} alt={val.alt} key={val.alt} className="odd:ml-auto" />;
            })}
          </div>
          <div className="flex gap-x-8 mt-8 mb-13.5">
            {securityBureaus.slice(2, 4).map((val) => {
              return <Image {...val} alt={val.alt} key={val.alt} className="odd:ml-auto" />;
            })}
          </div>
        </div>
        <div className="md:flex gap-x-8 mt-8 mr-45 hidden">
          {securityBureaus.map((val) => {
            return <Image {...val} alt={val.alt} key={val.alt} />;
          })}
        </div>
      </div>
    </div>
  );
}
