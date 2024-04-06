import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

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
    <div className="embossed relative will-change-contents">
      <button
        onClick={handleSlide}
        className="absolute right-2 top-2 flex  w-fit transform items-center justify-center rounded-full bg-tSecondary p-1 pl-2 text-center text-sm shadow-inner shadow-tGrey/50 hover:bg-opacity-10 md:text-lg lg:text-xl"
      >
        {currentCaption}{" "}
        <span className="inline-block text-lg">
          <FiChevronRight />
        </span>
      </button>
      <Image
        src={currentImage}
        alt="Before and After Design Images"
        className="size-full rounded-lg object-cover"
        width="700"
        height="700"
        loading="lazy"
        quality={100}
      />
    </div>
  );
};

export default BeforeAfterCarousel;
