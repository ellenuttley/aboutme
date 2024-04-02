import React from "react";

export const HoverTextImpressive = () => {
  return (
    <div className="*:whiteHeader group relative inline-block cursor-pointer leading-normal before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-tPrimary ">
      <p className="whiteHeader relative inline-block whitespace-break-spaces group-hover:hidden">
        over the top
      </p>
      <p className="whiteHeader relative hidden whitespace-break-spaces opacity-0 group-hover:inline-block  group-hover:opacity-100">
        impressive
      </p>
    </div>
  );
};

export const HoverTextAutism = () => {
  return (
    <div className="*:whiteHeader  cursor-pointeroverflow-x-visible group relative inline-block leading-normal before:absolute before:block ">
      <p className="text-tPrimary relative  inline-block whitespace-break-spaces group-hover:hidden">
        {" "}
        Autistic
      </p>
      <p className="whiteHeader relative hidden  whitespace-break-spaces opacity-0 group-hover:inline-block group-hover:opacity-100">
        {" "}
        and that's a good thing
      </p>
    </div>
  );
};
