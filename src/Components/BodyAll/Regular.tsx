import React from "react";
import { dataBase2 } from "../Data/DataBase";
import Slider from "react-slick";
import Filter from "./Filter";

// Define the structure of each item in dataBase2
interface DataItem {
  id: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  description: string;
  title: string;
}

// Settings for Slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const Regular: React.FC = () => {
  return (
    <div className="mt-8 px-4">
      <strong className="block text-lg">Սովորական առաջարկներ</strong>

      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {dataBase2.map((el: DataItem) => (
          <div key={el.id} className="border p-4 rounded-lg shadow-md bg-white">
            <Slider {...settings}>
              <img src={el.image1} className="rounded-lg object-cover w-full h-48" alt={el.title} />
              <img src={el.image2} className="rounded-lg object-cover w-full h-48" alt={el.title} />
              <img src={el.image3} className="rounded-lg object-cover w-full h-48" alt={el.title} />
            </Slider>
            <img src={el.image4} className="w-[20px]" alt="Icon" />

            <p className="text-black mt-4 text-base sm:text-lg">{el.description}</p>
            <p className="text-black mt-2 text-lg sm:text-xl font-bold">{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regular;
