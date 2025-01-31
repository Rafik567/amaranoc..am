import React, { useState } from "react";
import { data } from "../Data/DataBase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../BodyAll/filter.css";
import {
  dataBase,
  dataImg,
  dataImg2,
  dataImg3,
  dataImg4,
  dataImg5,
  dataImg6,
} from "../Data/DataBase";

const Home = () => {
  const [img, setImg] = useState([]);

  const clickImg = (el) => {
    if (el.id === data[0].id) {
      setImg(dataImg);
    } else if (el.id === data[1].id) {
      setImg(dataImg2);
    } else if (el.id === data[2].id) {
      setImg(dataImg3);
    } else if (el.id === data[3].id) {
      setImg(dataImg4);
    } else if (el.id === data[4].id) {
      setImg(dataImg5);
    } else if (el.id === data[5].id) {
      setImg(dataImg6);
    } else {
      setImg([]);
    }
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <div className="flex justify-center mt-10 flex-wrap gap-1 sm:gap-12">
        {data.map((el) => (
          <div
            key={el.id}
            className="flex flex-col items-center w-20 sm:w-24 md:w-20"
          >
            <img
              src={el.url}
              alt={el.text}
              className="image rounded-lg w-20 h-20 sm:w-10 sm:h-10 md:w-10 md:h-10 cursor-pointer"
              onClick={() => clickImg(el)}
            />

            <p className="text-black text-center mt-2 sm:text-sm md:text-base">
              {el.text}
            </p>
          </div>
        ))}
        <i
          className="fa fa-arrow-right mt-9 h-10 rounded-2xl border-2 border-gray-300 p-1"
          style={{ fontSize: "24px" }}
        ></i>
      </div>

      {img.length && (
        <div className="image-gallery mt-5">
          <div className="flex justify-center flex-wrap gap-4">
            {img.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="rounded-lg object-cover"
                />
                <p className="text-black mt-2 sm:text-sm md:text-base">
                  {item.description}
                </p>
                <p className="text-black mt-1 sm:text-base md:text-lg font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
