import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const LeftRightArrowBtn = ({ containerRef }) => {
  const handleScrollLeft = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 300;
    }
  };
  const handleScrollRight = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 300;
    }
  };
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-200 rounded-full h-9 w-9 flex items-center justify-center cursor-pointer">
        <IoIosArrowRoundBack size={30} onClick={handleScrollLeft} />
      </div>
      <div className="bg-gray-200 rounded-full h-9 w-9 flex items-center justify-center cursor-pointer">
        <IoIosArrowRoundForward size={30} onClick={handleScrollRight} />
      </div>
    </div>
  );
};

export default LeftRightArrowBtn;
