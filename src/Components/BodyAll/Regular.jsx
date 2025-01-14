import React from "react";
import { data, data2, data6, data7, data8, dataBase } from "../Data/DataBase";
import Filter from "./Filter";

const Regular = () => {
  return (
    <div>
      <div className="mt-[30px]">
        <b className="ml-[49px]">Սովորական առաջարկներ</b>
        <div className="flex justify-center mt-[10px]  flex-wrap  gap-[25px] ml-[40px]">
          {data6.map((el) => (
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

      <div className="mt-[30px]">
        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
          {data7.map((el) => (
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
      <div className="mt-[30px]">
        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
          {data8.map((el) => (
            <div key={el.id}>
              <img
                src={el.image}
                className="image w-[280px] rounded-[10px] h-[240px] "
              />
              <p className=" text-[black]">{el.description}</p>
              <p className=" text-[black]">{el.title}</p>
            </div>
          ))}
        </div>
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

export default Regular;
