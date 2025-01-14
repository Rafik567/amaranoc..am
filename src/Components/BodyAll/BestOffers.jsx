import React from "react";
import { data, data2, data6, data7, data8, dataBase } from "../Data/DataBase";
import Filter from "./Filter";

const BestOffers = () => {
  return (
    <div className="mt-[30px]">
      <b className="ml-[49px]">Լավագույն առաջարկներ</b>
      <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
        {dataBase.map((el, icon) => (
          <div key={el.id}>
            <img
              src={el.image}
              className="image rounded-[10px] w-[280px] h-[240px] "
            />

            <i src={el.icon} className="text-[24px]"></i>
            <p className=" text-[black]">{el.description}</p>
            <p className=" text-[black]">{el.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-[30px]">
        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
          {data2.map((el) => (
            <div key={el.id}>
              <img
                src={el.image}
                className="image rounded-[10px] w-[280px] h-[240px] "
              />
              <p className=" text-[black]">{el.description}</p>
              <p className=" text-[black]">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
