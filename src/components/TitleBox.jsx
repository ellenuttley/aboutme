import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const TitleBox = ({ title }) => {
  return (
    <div className="col-span-3">
      <div className="titlebox-wrapper">
        {/* <RiDoubleQuotesL className="titlebox-icon" /> */}
        <p className="titlebox">{title}</p>
        {/* <RiDoubleQuotesR className="titlebox-icon" /> */}
      </div>
    </div>
  );
};

export default TitleBox;
