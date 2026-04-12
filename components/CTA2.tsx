import Image from "next/image";

export default function CTA2() {
  return (
    <div className="w-full h-fit bg-alt-blue-600 px-6 md:flex md:items-center">
      <div className="md:border-l md:py-24.5 md:ml-12.5 border-alt-blue-500 md:pl-4">
        <h2 className="font-gillroy font-bold text-[32px]/9.5 md:text-[52px]/14.5 pt-6 text-blue-300 [word-spacing:3]">
          Ready to build your
          <br /> team’s <span className="text-base-100">dream CRM?</span>
        </h2>
        <div className="flex flex-col md:flex-row h-fit md:items-center md:gap-3">
          <button className="bg-alt-blue-500 h-full md:px-4 text-base-100 font-thin text-xl/6 py-3 rounded-xl mt-8 cursor-pointer active:cursor-default">
            Start for free
          </button>
          <button className="border border-alt-blue-500 h-full md:px-4 text-base-200 font-thin text-xl/6 py-3 rounded-xl mt-3 md:mt-8 cursor-pointer active:cursor-default">
            Start for free
          </button>
        </div>
      </div>
      <div className="flex justify-center ml-auto -mx-6">
        <Image
          src="./CTA 2 Graphic.svg"
          width={400}
          height={300}
          alt="a minimalistic graphic"
          className="mt-8 mb-6 md:hidden"
        />
        <Image
          src="./PC CTA 2 Graphic.svg"
          width={740}
          height={362}
          alt="a minimalistic graphic"
          className="mt-8 mb-6 hidden md:block"
        />
      </div>
    </div>
  );
}
