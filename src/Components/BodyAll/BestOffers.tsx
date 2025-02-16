import React, { useState, FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataBase } from "../Data/DataBase";

// Տվյալների տիպավորումը
interface Offer {
  id: number;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  title: string;
}

// Props-ի տիպավորումը
interface BestOffersProps {
  selectedRegion: string | null;
}

const BestOffers: FC<BestOffersProps> = ({ selectedRegion }) => {
  const [showFiltered, setShowFiltered] = useState<boolean>(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  // Ստուգում ենք, արդյոք կա տվյալ selectedRegion-ի համար համապատասխան առաջարկ
  const filteredData: Offer[] = selectedRegion
    ? dataBase.filter((el) => el.description?.toLowerCase().includes(selectedRegion.toLowerCase()))
    : [];

  const handleToggle = () => {
    setShowFiltered(!showFiltered);
  };

  return (
    <div className="mt-8 px-4">
      <strong className="block text-lg sm:text-xl">Լավագույն առաջարկներ</strong>

      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {!showFiltered
          ? dataBase.map((el) => (
              <div key={el.id} className="border p-4 rounded-lg shadow-md bg-white">
                <Slider {...settings}>
                  <img src={el.image1} className="rounded-lg object-cover w-full h-48" alt={el.title} />
                  <img src={el.image2} className="rounded-lg object-cover w-full h-48" alt={el.title} />
                  <img src={el.image3} className="rounded-lg object-cover w-full h-48" alt={el.title} />
                </Slider>
                <p className="text-black mt-4 text-base sm:text-lg">{el.description}</p>
                <p className="text-black mt-2 text-lg sm:text-xl font-bold">{el.title}</p>
              </div>
            ))
          : filteredData.length > 0 ? (
              filteredData.map((el) => (
                <div key={el.id} className="border p-4 rounded-lg shadow-md bg-white">
                  <Slider {...settings}>
                    <img src={el.image1} className="rounded-lg object-cover w-full h-48" alt={el.title} />
                    <img src={el.image2} className="rounded-lg object-cover w-full h-48" alt={el.title} />
                    <img src={el.image3} className="rounded-lg object-cover w-full h-48" alt={el.title} />
                  </Slider>
                  <p className="text-black mt-4 text-base sm:text-lg">{el.description}</p>
                  <p className="text-black mt-2 text-lg sm:text-xl font-bold">{el.title}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg mt-4">Տվյալներ չեն գտնվել</p>
            )}
      </div>

      <button
        onClick={handleToggle}
        className="mt-4 py-2 px-6 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        {showFiltered ? "Ցուցադրել բոլոր նկարները" : "Ցուցադրել ընտրվածը"}
      </button>
    </div>
  );
};

export default BestOffers;
