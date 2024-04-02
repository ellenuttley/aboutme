import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const QuoteBox = ({ quote }) => {
  return (
    <div className="col-span-3">
      <div className="quotebox flex flex-row place-items-center  justify-evenly rounded-e-full rounded-s-full ">
        <RiDoubleQuotesL className=" rounded-full border-2 border-tGrey bg-tSecondary p-0.5 text-4xl text-tBlack shadow-inner shadow-tGrey/80" />
        <p className="flex flex-grow px-1 place-items-center justify-evenly text-center font-calistoga text-sm max-md:text-base lg:text-xl">
          {quote}
        </p>
        <RiDoubleQuotesR className="rounded-full border-2 border-tGrey bg-tSecondary p-0.5 text-4xl text-tBlack shadow-inner shadow-tGrey/80" />
      </div>
    </div>
  );
};

export default QuoteBox;
