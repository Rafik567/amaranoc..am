import React from "react";

const Map = () => {
  return (
    <>
      <div className="ml-[50px] flex gap-[20px]">
        <button className=" w-[180px] rounded-[40px] border-2 border-gray-300 p-[8px]">
          Քարտեզ
        </button>
        <i
          className="fa fa-calendar mt-[10px]  rounded-[20px] border-2 border-gray-300 p-[8px] mb-[5px] "
          style={{ fontSize: "24px" }}
        ></i>
      </div>
    </>
  );
};

export default Map;
