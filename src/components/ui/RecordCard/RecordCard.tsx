import React from "react";
import type { RecordCardProps } from "./RecordCard.types";

const RecordCard: React.FC<RecordCardProps> = ({ imgUrl, title, subTitle }) => {
  return (
    <>
      <div className="relative border-[24px] border-primary-300 aspect-square cursor-pointer overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute z-10 inset-0 mix-luminosity bg-black/50"></div>
        <div className="absolute z-20 inset-0 flex">
          <div className="flex flex-col flex-1 text-center space-y-2">
            <div className="flex-1 flex items-end justify-center">
              <h3 className="text-primary-300 text-[25px]/[30px] font-normal tracking-[0.13px]">
                {title}
              </h3>
            </div>
            <div className="flex-1 flex items-start justify-center">
              <div className="flex-none md:flex-1 bg-primary-400 text-light text-[14px]/[20px] w-38 md:w-auto md:mx-4 lg:mx-10 py-[2px]">
                {subTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordCard;
