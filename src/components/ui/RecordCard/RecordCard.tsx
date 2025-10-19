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
        <div className="absolute inset-0 bg-black/55">
          <div className="flex flex-col justify-center items-center size-full">
            <div className="text-center space-y-1 w-full">
              <h3 className="text-primary-300 text-[25px]/[30px] tracking-[0.13px]">
                {title}
              </h3>
              <div className="bg-primary-400 text-light text-[14px]/[20px] mx-10 py-[2px]">
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
