import React from "react";
import Button from "./Button";

const BannerInfo = ({
  description1,
  emphasytext,
  descri2,
  position,
  description1b,
}: {
  description1?: string;
  emphasytext?: string;
  descri2?: string;
  position?: number;
  description1b?: string;
}) => {
  return (
    <div className="w-full flex flex-col mb-10 md:mb-0">
      {position === 1 && (
        <div className="flex flex-col item-start justify-center mt-4 md:space-y-6 space-y-4 w-full">
          <h1 className="text-[62.5px] max-lg:text-[46px] max-md:text-[34px] max-sm:text-[30px] text-left font-extrabold text-white">
            {description1}
          </h1>
          <span className="text-white bg-brandcolor text-[62.5px] max-lg:text-[46px] max-md:text-[34px] max-sm:text-[30px] font-bold p-2 w-fit font-grotesque">
            {emphasytext}
          </span>
          <p className="text-[24px] max-md:text-[16px] text-whitetext text-left font-grotesque">
            {descri2}
          </p>
        </div>
      )}
      {position === 2 && (
        <div className="flex flex-col space-y-6 mt-4 w-full">
          <div className="flex items-center space-x-2">
            <span className="text-white bg-gold text-[62.5px] max-lg:text-[46px] max-md:text-[34px] font-bold p-2 text-left w-fit font-grotesque">
              {emphasytext}
            </span>
            <h1 className="text-[62.5px] max-lg:text-[46px] max-md:text-[34px] text-white font-bold text-left font-grotesque">
              {description1}
            </h1>
          </div>
          <h1 className="text-[62.5px] max-lg:text-[46px] max-md:text-[34px] text-white font-bold text-left font-grotesque">
            {description1b}
          </h1>

          <p className="text-whitetext text-[24px] max-md:text-[18px] text-left md:w-[40%] w-full">
            {descri2}
          </p>
        </div>
      )}
      <div className="flex items-center space-x-2 gap-4 mt-14">
        <Button
          name="Book a session"
          buttonClass="bg-white text-black text-xs w-[150px] p-4"
        />
        <Button
          name="Our Work"
          buttonClass="border border-white text-white text-xs w-[160px] p-4"
        />
      </div>
    </div>
  );
};

export default BannerInfo;
