import React, { useState } from "react";
import "../BodyAll/filter.css";
import { dataRegion, dataFeatures, arjeq, buttons, rooms } from "../Data/DataBase";

const Filter = () => {
  const dataImg = [
    {
      id: 1,
      image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75",
      description: "Օհանավան",
      title: "100,000 Դ",
    },
    {
      id: 2,
      image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326262412--0.25440242535580326image.webp&w=1920&q=75",
      description: "Նոր Հաճն",
      title: "108,000 Դ",
    },
    {
      id: 3,
      image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1727006467456--0.9643954207029866image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "108,000 Դ",
    },
    {
      id: 4,  // Դիլիջանի նոր ID
      image: "https://yourdilijanimage.com",  // Դիլիջանի պատկերն այստեղ
      description: "Դիլիջան",
      title: "120,000 Դ",
    }
  ];
  // Սահմանենք հիմնական վիճակը
  const [filters, setFilters] = useState({
    region: null,
    priceRange: { min: 0, max: 0 },
    peopleCount: 1,
    nightsCount: 1,
    roomsCount: null,
    features: [],
  });

  const [img, setImg] = useState([]);
  const handleRegionChange = (regionId) => {
    setFilters((prevState) => ({
      ...prevState,
      region: regionId,  // Նոր ընտրությունը `region`-ի մեջ
    }));
  
    // Դիլիջանի ID-ն ստուգելու համար
    if (regionId === 4) {  // Դիլիջանի ID
      setImg(dataImg);
    } else {
      setImg([]);
    }
  };
  
  const handlePeopleCountChange = (increment) => {
    setFilters((prevState) => ({
      ...prevState,
      peopleCount: prevState.peopleCount + increment,
    }));
  };

  const handleRoomsCountChange = (increment) => {
    setFilters((prevState) => ({
      ...prevState,
      roomsCount: prevState.roomsCount + increment,
    }));
  };

  const handlePriceRangeChange = (min, max) => {
    setFilters((prevState) => ({
      ...prevState,
      priceRange: { min, max },
    }));
  };

  const handleFeatureChange = (featureId) => {
    setFilters((prevState) => {
      const updatedFeatures = prevState.features.includes(featureId)
        ? prevState.features.filter((id) => id !== featureId)
        : [...prevState.features, featureId];

      return {
        ...prevState,
        features: updatedFeatures,
      };
    });
  };

  return (
    <div className="post hidden sm:block">
      <div className="filter-container">
        {/* Տարածաշրջան */}
        <div className="filter-group max-h-[200px] overflow-y-auto p-2">
          <strong>Տարածաշրջան</strong>
          {dataRegion.map((el) => (
            <div key={el.id} className="flex flex-wrap gap-[10px]">
              <input
                type="checkbox"
                onChange={() => handleRegionChange(el.id)}
              />
              <span className="text-gray-400">{el.text}</span>
            </div>
          ))}
        </div>
        <hr />

        {/* Արժեք */}
        <div className="filter-group">
          <div className="flex flex-wrap gap-[50px]">
            <strong>Արժեք</strong>
            <div className="flex gap-[10px]">
              {arjeq.map((currency) =>
                currency.type === "image" ? (
                  <img
                    key={currency.id}
                    src={currency.icon}
                    alt={currency.alt}
                    className="w-[40px]"
                  />
                ) : (
                  <i
                    key={currency.id}
                    className={`${currency.icon} h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]`}
                    style={{ fontSize: "24px" }}
                  ></i>
                )
              )}
            </div>
          </div>
          <div className="price-range mt-[20px] flex flex-wrap gap-2">
            <input
              type="number"
              placeholder="Սկսած"
              className="w-full sm:w-[120px]"
              onChange={(e) => handlePriceRangeChange(e.target.value, filters.priceRange.max)}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Մինչև"
              className="w-full sm:w-[120px]"
              onChange={(e) => handlePriceRangeChange(filters.priceRange.min, e.target.value)}
            />
          </div>
        </div>
        <hr />

        {/* Մարդկանց քանակ */}
        <div className="filter-group">
          <strong>Մարդկանց թույլատրելի քանակ</strong>
          <div className="flex flex-wrap gap-[10px] mt-[10px]">
            <button
              className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]"
              onClick={() => handlePeopleCountChange(-1)}
            >
              -
            </button>
            <input
              type="number"
              className="w-[60px] text-center"
              placeholder={filters.peopleCount}
              readOnly
            />
            <button
              className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]"
              onClick={() => handlePeopleCountChange(1)}
            >
              +
            </button>
          </div>
        </div>
        <hr />

        {/* Գիշերակացի առկայություն */}
        <div className="filter-group">
          <strong>Գիշերակացի առկայություն</strong>
          <div className="flex flex-wrap gap-[15px]">
          {buttons.map((button) => (
  <button
    key={button.id}
    onClick={() => handleRegionChange(button.id)}
    className={`rounded-[30px] h-[50px] ${filters.region === button.id ? "bg-black text-white" : "bg-gray-300 text-black"}`}
    style={{ width: button.width, marginTop: button.id === 3 ? "10px" : "0" }}
  >
    {button.text}
  </button>
))}
          </div>
        </div>
        <hr />

        {/* Սենյակների քանակ */}
        <div className="filter-group">
          <strong>Սենյակների քանակ</strong>
          <div className="flex flex-wrap gap-[15px]">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => handleRoomsCountChange(1)}
                className={`rounded-[30px] h-[50px] ${filters.roomsCount === room.id ? "bg-black text-white" : "bg-gray-300 text-black"}`}
                style={{
                  width: room.width,
                  marginTop: room.id >= 7 ? "10px" : "0"
                }}
              >
                {room.text}
              </button>
            ))}
          </div>
        </div>
        <hr />

        {/* Առավելություններ */}
        <div className="filter-group max-h-[200px] overflow-y-auto p-2">
          <strong>Առավելություններ</strong>
          {dataFeatures.map((el) => (
            <div key={el.id} className="flex flex-wrap gap-[10px]">
              <input
                type="checkbox"
                checked={filters.features.includes(el.id)}
                onChange={() => handleFeatureChange(el.id)}
              />
              <span className="text-gray-400">{el.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
