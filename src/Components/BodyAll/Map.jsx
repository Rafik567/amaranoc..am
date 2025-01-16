import React from "react";

const Map = () => {
  return (
    <>
      <div className="ml-[60px] flex flex-wrap gap-[20px]">
        <button className="w-[180px] sm:w-[150px] md:w-[180px] rounded-[40px] border-2 border-gray-300 p-[8px]">
          Քարտեզ
        </button>
        <i
          className="fa fa-calendar mt-[10px] sm:mt-[5px] rounded-[20px] border-2 border-gray-300 p-[8px] mb-[5px] text-[24px] sm:text-[20px]"
        ></i>
      </div>
    </>
  );
};

export default Map;
