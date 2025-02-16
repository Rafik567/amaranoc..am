import React, { useState } from "react";
import { data, dataImg, dataImg2, dataImg3, dataImg4, dataImg5,  } from "../Data/DataBase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BodyAll/filter.css";

// Տիպավորում տվյալների համար
interface DataItem {
  id: number;
  url: string;
  text: string;
}

interface ImgItem {
  id: number;
  image1: string;
  description: string;
  title: string;
}

// Համալիրության տիպավորում
const Home: React.FC = () => {
  const [img, setImg] = useState<ImgItem[]>([]);

  const clickImg = (el: DataItem) => {
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
    } else {
      setImg([]);
    }
  };

  return (
    <>
      <hr />
      <div className="hidden sm:block">
        <div className="flex justify-evenly mt-[10px] flex-wrap gap-[200px] sm:gap-12">
          {data.map((el) => (
            <div key={el.id} className="flex flex-col items-center w-20 sm:w-24 md:w-20">
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
        <hr />

        {img.length > 0 && (
          <div className="justify-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {img.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
                  <img
                    src={item.image1}
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
      </div>
    </>
  );
};

export default Home;
