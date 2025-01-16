import React from "react";
import { dataBase, data2 } from "../Data/DataBase";
import Filter from "./Filter";

const BestOffers = () => {
  return (
    <div className="mt-[30px]">
      <b className="ml-[180px]">Լավագույն առաջարկներ</b>
      <div className="flex justify-center mt-[10px] flex-wrap gap-[15px] sm:gap-[25px] ml-[40px]">
        {dataBase.map((el) => (
          <div key={el.id} className="flex flex-col  sm:w-[280px] md:w-[300px] w-[240px]">
            <img
              src={el.image}
              className="image rounded-[10px] w-[240px] h-[200px] sm:w-[280px] sm:h-[240px] md:w-[300px] md:h-[260px]"
              alt={el.title}
            />
            <p className="text-[black]  mt-[10px] sm:text-[14px] md:text-[16px]">
              {el.description}
            </p>
            <p className="text-[black]  mt-[5px] sm:text-[16px] md:text-[18px] font-bold">
              {el.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[30px]">
        <div className="flex justify-center mt-[10px] flex-wrap gap-[15px] sm:gap-[25px] ml-[40px]">
          {data2.map((el) => (
            <div key={el.id} className="flex flex-col  sm:w-[280px] md:w-[300px] w-[240px]">
              <img
                src={el.image}
                className="image rounded-[10px] w-[240px] h-[200px] sm:w-[280px] sm:h-[240px] md:w-[300px] md:h-[260px]"
                alt={el.title}
              />
              <p className="text-[black]  mt-[10px] sm:text-[14px] md:text-[16px]">
                {el.description}
              </p>
              <p className="text-[black]  mt-[5px] sm:text-[16px] md:text-[18px] font-bold">
                {el.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
