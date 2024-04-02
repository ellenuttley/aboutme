import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const QuoteBox = ({ quote }) => {
  return (
    <div className="col-span-3">
      <div className="quotebox flex flex-row justify-around rounded-e-full rounded-s-full">
        <RiDoubleQuotesL className="border-tGrey shadow-tGrey/80 rounded-full border-2 bg-tSecondary p-0.5 text-4xl text-tBlack shadow-inner" />
        <p className="flex flex-grow place-items-center justify-evenly text-center font-calistoga text-sm max-md:text-base lg:text-xl">
          {quote}
        </p>
        <RiDoubleQuotesR className="border-tGrey shadow-tGrey/80 rounded-full border-2 bg-tSecondary p-0.5 text-4xl text-tBlack shadow-inner" />
      </div>
    </div>
  );
};

export default QuoteBox;
