import HeroButtons from "./HeroButtons";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full justify-center flex">
        <Link href="#" className="active:cursor-default">
          <div className="flex relative mt-11 items-center w-fit gap-3 sm:gap-5">
            <div className="bg-black rounded-full text-white px-2 py-0.5 flex">
              New
            </div>
            <p className="ml-1 sm:text-lg text-nowrap">
              How Pallet uses Attio to power their GTM
            </p>
            <button className="w-fit h-fit cursor-pointer active:cursor-default">
              <Image
                src="./arrow.svg"
                width={9}
                height={6.5}
                alt="arrow icon"
              />
            </button>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-9 flex-col">
        <h1 className="font-gillroy font-bold text-center text-6xl md:text-8xl md:max-w-270">
          Customer relationship magic.
        </h1>
        <p className="text-base-500 text-center mt-4 text-xl max-w-85 md:max-w-xl md:text-[22px]">
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </p>
        <div className="mt-8">
          <HeroButtons />
        </div>
        <Image
          src="./video example.svg"
          width={345}
          height={204}
          alt="fake video example"
          className="w-full mt-18.5 md:px-60"
          loading="eager"
        />
      </div>
    </>
  );
}
