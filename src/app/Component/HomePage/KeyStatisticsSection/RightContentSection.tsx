import React from "react";


export const RightContentSection = () => {
  return (
    <div className="flex flex-col w-full max-w-full lg:max-w-[533px] items-center lg:items-end gap-0 relative mt-4 lg:mt-0">
      {/* Desktop: Screen Time card overlaid on image */}
      <div className="relative w-full">
        <img
          className="rounded-xl w-full h-auto max-w-full lg:max-w-[533px] object-cover"
          src="/Raising Issue Image.png"
          alt="Person taking a break from screens"
        />
        <div className="hidden lg:block absolute top-4 right-4 w-[280px] xl:w-[320px]">
        </div>
      </div>
    </div>
  );
};
