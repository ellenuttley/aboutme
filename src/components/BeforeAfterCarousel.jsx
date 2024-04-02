'use client'
import React, { useState } from "react";

    //   {
    //     /* Usage Example*/
    //   }
    // <div className="flex flex-wrap justify-center">
    //   <BeforeAfterCarousel
    //     beforeImage="https://example.com/before1.jpg"
    //     afterImage="https://example.com/after1.jpg"
    //   />
    //   <BeforeAfterCarousel
    //     beforeImage="https://example.com/before2.jpg"
    //     afterImage="https://example.com/after2.jpg"
    //   />
    // </div>;

const BeforeAfterCarousel = ({ beforeImage, afterImage }) => {
  const [currentImage, setCurrentImage] = useState(beforeImage);

  const handleSlide = () => {
    setCurrentImage(currentImage === beforeImage ? afterImage : beforeImage);
  };

  return (
    <div className="relative">
      <img
        src={currentImage}
        alt="Before and After"
        className="h-auto w-full rounded-lg object-cover"
      />
      <button
        onClick={handleSlide}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 text-black"
      >
        Slide
      </button>
    </div>
  );
};

export default BeforeAfterCarousel;
