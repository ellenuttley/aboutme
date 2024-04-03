import React from "react";
import ReviewBox from "@/components/ReviewBox";
import ProjectSwiper from "@/components/ProjectSwiper";

const MyCode = () => {
  return (
    <div>
      <ReviewBox
        count={5}
        review="Yours is the only training that doesn’t make me want to jump out of the window" 
        name="Actual quote from a former teammate" />
      <ProjectSwiper />
    </div>
  );
};

export default MyCode;
