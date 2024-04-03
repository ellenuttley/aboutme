import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const QuoteBox = ({ quote }) => {
  return (
    <div className="col-span-3">
      <div className="quotebox-wrapper">
        <RiDoubleQuotesL className="quotebox-icon" />
        <p className="quotebox">
          {quote}
        </p>
        <RiDoubleQuotesR className="quotebox-icon" />
      </div>
    </div>
  );
};

export default QuoteBox;
