import Image from "next/image";
import React from "react";
export default function Proven({}) {
  return (
    <div className="flex justify-center">
      <div className="mt-17 grid grid-cols-3 md:grid-cols-6 items-center md:gap-x-40 gap-x-10 gap-y-2 md:gap-y-16 shrink-0">
        <Image
          src="./logos/Coca Cola.svg"
          width={100}
          height={10}
          alt="coca cola logo"
          className="w-auto h-auto md:scale-160"
        />
        <Image
          src="./logos/Open AI.svg"
          width={100}
          height={10}
          alt="openai logo"
          className="w-auto h-auto md:scale-160"
        />
        <Image
          src="./logos/Pallet.svg"
          width={100}
          height={10}
          alt="pallet logo"
          className="w-auto h-auto md:scale-160"
        />
        <Image
          src="./logos/Causal.svg"
          width={100}
          height={10}
          alt="causal logo"
          className="w-auto h-auto md:scale-160"
        />
        <Image
          src="./logos/Plain..svg"
          width={100}
          height={10}
          alt="plain logo"
          className="w-auto h-auto md:scale-160"
        />
        <Image
          src="./logos/Passionfroot.svg"
          width={100}
          height={10}
          alt="passionfroot logo"
          className="w-auto h-auto md:scale-160"
        />

        <div className="col-span-3 md:col-span-6 flex justify-between items-center">
          <Image
            src="./logos/dopt.svg"
            width={100}
            height={10}
            alt="dopt logo"
            className="w-auto h-auto md:scale-160"
          />
          <Image
            src="./logos/hyperline.svg"
            width={100}
            height={10}
            alt="hyperline logo"
            className="w-auto h-auto md:scale-160"
          />
          <Image
            src="./logos/on deck.svg"
            width={100}
            height={10}
            alt="on deck logo"
            className="w-auto h-auto md:scale-160"
          />
          <Image
            src="./logos/hyperline.svg"
            width={100}
            height={10}
            alt="hyperline logo"
            className="w-auto h-auto hidden md:block md:scale-160"
          />
          <Image
            src="./logos/on deck.svg"
            width={100}
            height={10}
            alt="on deck logo"
            className="w-auto h-auto hidden md:block md:scale-160"
          />
        </div>
      </div>
    </div>
  );
}
