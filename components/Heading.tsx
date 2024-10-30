import React from "react";

const Heading = ({
  name,
  desc,
  noborder,
  addwidth,
}: {
  name: string;
  desc: string;
  noborder?: boolean;
  hclass?: string;
  addwidth?: string;
}) => {
  return (
    <div className=" flex items-center justify-center flex-col w-full mb-10 px-4 md:px-0">
      <div
        className={`border text-[24px] max-md:text-[18px] font-medium rounded-full text-center ${
          noborder ? "border-none" : "border-stroke_btn px-4 py-2"
        }  text-gold `}
      >
        {name}
      </div>
      <h2
        className={`text-black font-bold text-[40px] max-lg:text-[32px] max-md:text-[24px] max-sm:text-[20px] ${
          addwidth ? addwidth : "md:w-[60%]"
        } w-full text-center mt-5 font-grotesque`}
      >
        {desc}
      </h2>
    </div>
  );
};

export default Heading;
