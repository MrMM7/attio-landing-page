import Image from "next/image";
import { ReactElement } from "react";

interface CRMCardProps {
  title: string | ReactElement;
  description: string | ReactElement;
  thumnailSrc: string;
  limitThumbnailSize?: boolean;
  iconSrc?: string;
  dataIndex?: number;
  titleConcat?: boolean;
  showImageBorder?: boolean;
  className?: string;
}

export default function CRMCard({
  title,
  description,
  iconSrc,
  thumnailSrc,
  dataIndex,
  limitThumbnailSize = true,
  titleConcat = false,
  showImageBorder = true,
  className = "",
}: CRMCardProps) {
  return (
    <div
      className="p-1 bg-dark-100 rounded-2xl border border-base-200 shrink-0 h-full flex"
      data-index={dataIndex}
    >
      <div
        className={`border border-dark-200 w-full rounded-2xl h-full flex flex-col ${
          limitThumbnailSize && "pl-6"
        }`}
      >
        <div className={`flex mt-6 gap-1.5 ${!limitThumbnailSize && "pl-6"}`}>
          {iconSrc && (
            <Image
              src={iconSrc}
              width={20}
              height={20}
              alt="grid icon"
              className="w-auto h-auto"
            />
          )}

          {!titleConcat ? (
            <h2 className="text-lg font-semibold">{title}</h2>
          ) : (
            <h2 className="text-lg text-base-400 mr-6 md:max-w-sm">
              <span className="font-semibold text-base-500">{title}</span>
              {description}
            </h2>
          )}
        </div>

        {!titleConcat && (
          <p className="max-w-2xs text-base/6 text-base-400 mt-4">
            {description}
          </p>
        )}

        {/* THIS is what forces proper stretching */}
        <div className="flex-1" />

        <div
          className={`flex ${
            !limitThumbnailSize
              ? "w-full justify-center"
              : "w-fit ml-auto"
          }`}
        >
          <div
            className={`mt-6 ${
              showImageBorder &&
              "border border-[#E6E7EA] bg-white rounded-2xl flex"
            } ${className}`}
          >
            <Image
              src={thumnailSrc}
              width={300}
              height={202}
              alt=""
              className="w-auto h-auto md:hidden"
            />
            <Image
              src={thumnailSrc}
              width={606}
              height={478}
              alt=""
              className="hidden md:block w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}