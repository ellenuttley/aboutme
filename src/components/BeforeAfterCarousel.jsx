import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const BeforeAfterCarousel = ({ beforeImage, afterImage }) => {
  const [currentImage, setCurrentImage] = useState(beforeImage);
  const [currentCaption, setCurrentCaption] = useState("Before"); // Initialize caption state

  const handleSlide = () => {
    const newImage = currentImage === beforeImage ? afterImage : beforeImage;
    const newCaption = newImage === beforeImage ? "Before" : "After"; // Update caption based on new image
    setCurrentImage(newImage);
    setCurrentCaption(newCaption); // Update caption state
  };

  return (
    <div className="relative embossed">
      <button
        onClick={handleSlide}
        className="absolute right-2 top-2 items-center justify-center text-center flex w-fit transform rounded-full bg-tSecondary hover:bg-opacity-10 p-1 pl-2 text-sm shadow-inner shadow-tGrey/50 md:text-lg lg:text-xl"
      >
        {currentCaption}{" "}
        <span className="inline-block text-lg">
          <FiChevronRight />
        </span>
      </button>
      <img
        src={currentImage}
        alt="Before and After"
        className="h-auto w-full rounded-lg object-cover"
      />
    </div>
  );
};

export default BeforeAfterCarousel;
