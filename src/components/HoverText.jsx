import React from 'react';

const HoverText = () => {
 return (
    <div className="group relative text-tWhite inline-block cursor-pointer before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-tSecondary ">
      <p className="relative inline-block group-hover:hidden">
        over the top
      </p>
      <p className="opacity-0 hidden relative group-hover:inline-block  group-hover:opacity-100">
        impressive
      </p>
    </div>

    
 );
};

export default HoverText;
