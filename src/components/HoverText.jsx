import React from "react";

export const HoverTextImpressive = () => {
  return (
    <div className="*:whiteHeader group relative inline-block cursor-pointer leading-normal before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-tPrimary ">
      <h2 className="whiteHeader relative inline-block whitespace-break-spaces group-hover:hidden">
        over the top
      </h2>
      <h2 className="whiteHeader relative hidden whitespace-break-spaces opacity-0 group-hover:inline-block  group-hover:opacity-100">
        impressive
      </h2>
    </div>
  );
};

export const HoverTextAutism = () => {
  return (
    <div className="*:whiteHeader  cursor-pointeroverflow-x-visible group relative inline-block leading-normal before:absolute before:block ">
      <span className=" relative inline-block whitespace-break-spaces text-2xl leading-loose text-tPrimary transition-transform  md:text-4xl lg:text-5xl ">
        {" "}
        Autistic
      </span>
      <span className="relative hidden whitespace-break-spaces text-2xl leading-loose text-tTransition  opacity-0 transition-transform  group-hover:inline-block group-hover:opacity-100 md:text-4xl lg:text-5xl">
        {" "}
        and that is a good thing
      </span>
    </div>
  );
};
