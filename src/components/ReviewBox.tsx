import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewBoxProps {
  count: number;
  review: string;
  name: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ count, review, name }) => {
  const icons = Array(count).fill(null);

  return (
    <div className="reviewbox relative flex min-h-40 flex-col border border-b-2 border-l-4 border-r-4 border-t-2 border-tGrey/20 shadow-inner shadow-tGrey/50">
      <span className="">
        <div className="flex h-full w-fit flex-shrink place-self-start py-1">
          {icons.map((_, index) => (
            <FaStar
              key={index}
              className="ml-1 mr-1 justify-self-end text-2xl text-[#e1b83e]"
            />
          ))}
        </div>
      </span>
      <div className="self-left ml-1 mt-2 min-h-20 flex-grow rounded-lg rounded-l-md rounded-r-md border-b-2 border-l-4 border-r-4 border-t-2 border-tGrey/15 bg-tWhite/80 p-1 pl-2 text-base text-tBlack shadow-inner shadow-tGrey/50 will-change-contents md:text-lg">
        {review}
      </div>
      <div className="self-left mt-2 flex-grow rounded-l-md rounded-r-md border-b-2 border-l-4 border-r-4 border-t-2 border-transparent bg-transparent pl-2 text-sm text-tBlack/90 md:text-sm">
        - {name}
      </div>
    </div>
  );
};

export default ReviewBox;
