import React, { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataBase } from "../Data/DataBase";
import { useNavigate } from "react-router-dom";

interface Offer {
  id: number;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  title: string;
}

interface BestOffersProps {
  selectedRegion: string | null;
}

const BestOffers: FC<BestOffersProps> = ({ selectedRegion }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const filteredData: Offer[] = selectedRegion
    ? dataBase.filter((el) =>
        el.description?.toLowerCase().includes(selectedRegion.toLowerCase())
      )
    : [];

  const handleClick = (id: number) => {
    navigate(`/offer/${id}`);
  };

  return (
    <div className="mt-8 px-4">
      <strong className="block text-lg sm:text-xl">Լավագույն առաջարկներ</strong>

      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {(selectedRegion ? filteredData : dataBase).map((el) => (
          <div
            key={el.id}
            className="border p-4 rounded-lg shadow-md bg-white cursor-pointer"
            onClick={() => handleClick(el.id)}
          >
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
        ))}
      </div>
    </div>
  );
};

export default BestOffers;
