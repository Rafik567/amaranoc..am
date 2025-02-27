import React from "react";
import { dataBase2 } from "../Data/DataBase";
import Slider from "react-slick";

interface Offer {
  id: number;
  image1: string;
  image2: string;
  image3: string;
  image4?: string;
  description: string;
  title: string;
}

interface RegularProps {
  selectedRegion: string | null;
}

const Regular: React.FC<RegularProps> = ({ selectedRegion }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const filteredData: Offer[] = selectedRegion
    ? dataBase2.filter((el) =>
        el.description?.toLowerCase().includes(selectedRegion.toLowerCase())
      )
    : dataBase2; // Եթե չկա որոնում, ցույց ենք տալիս բոլոր տվյալները

  return (
    <div className="mt-8 px-4">
      <strong className="block text-lg sm:text-xl">Սովորական առաջարկներ</strong>

      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {filteredData.length > 0 ? (
          filteredData.map((el) => (
            <div key={el.id} className="border p-4 rounded-lg shadow-md bg-white">
              <Slider {...settings}>
                <img
                  src={el.image1}
                  className="rounded-lg object-cover w-full h-48"
                  alt={el.title}
                />
                <img
                  src={el.image2}
                  className="rounded-lg object-cover w-full h-48"
                  alt={el.title}
                />
                <img
                  src={el.image3}
                  className="rounded-lg object-cover w-full h-48"
                  alt={el.title}
                />
              </Slider>
              <p className="text-black mt-4 text-base sm:text-lg">
                {el.description}
              </p>
              <p className="text-black mt-2 text-lg sm:text-xl font-bold">
                {el.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg mt-4">
            Տվյալներ չեն գտնվել
          </p>
        )}
      </div>
    </div>
  );
};

export default Regular;
