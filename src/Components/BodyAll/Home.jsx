import React from "react";
import { data } from "../Data/DataBase";
import "../BodyAll/filter.css";

const Home = () => {
  return (
    <>
      <div className="flex  ml-[60px] justify-center mt-[10px] flex-wrap gap-[15px] sm:gap-[90px] ml-[40px]">
        {data.map((el) => (
          <div
            key={el.id}
            className="flex flex-col items-center sm:w-[150px] md:w-[80px] w-[120px]">
            <img
              src={el.url}
              className="image rounded-[10px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
              alt={el.text}
            />
            <p className="card-description text-[black] text-center mt-[10px] sm:text-[14px] md:text-[16px]">
              {el.text}
            </p>
          </div>
        ))}
        <i
          className="fa fa-arrow-right mt-[65px] h-[39px] rounded-[20px] border-2 border-gray-300 p-[6px]"
          style={{ fontSize: "24px" }}
        ></i>
      </div>
    </>
  );
};

export default Home;
