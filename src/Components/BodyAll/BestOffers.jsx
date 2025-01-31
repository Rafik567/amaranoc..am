import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataBase, data2 } from "../Data/DataBase";
import Filter from "./Filter";

const BestOffers = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1000,
  // };
  return (
    <div className="mt-[30px]">
      <b className="pl-[170px]">Լավագույն առաջարկներ</b>
      <div className="flex justify-center mt-[10px] flex-wrap gap-[15px] sm:gap-[25px] ">
        {dataBase.map((el) => (
          <div key={el.id} className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">

            <img
              src={el.image}
              className="rounded-[10px] object-cover"
              alt={el.title}
              />
        
            <p className="text-[black] mt-[10px] sm:text-[14px] md:text-[16px]">
              {el.description}
            </p>
            <p className="text-[black] mt-[5px] sm:text-[16px] md:text-[18px] font-bold">
              {el.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[30px]">
        <div className="flex justify-center mt-[10px] flex-wrap gap-[15px] sm:gap-[25px] ">
          {data2.map((el) => (
            <div key={el.id} className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
              <img
                src={el.image}
                className="rounded-[10px] object-cover"
                alt={el.title}
              />
              <p className="text-[black] mt-[10px] sm:text-[14px] md:text-[16px]">
                {el.description}
              </p>
              <p className="text-[black] mt-[5px] sm:text-[16px] md:text-[18px] font-bold">
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
