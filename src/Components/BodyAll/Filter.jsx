import React, { useState } from "react";
import "../BodyAll/filter.css";
import { dataRegion, dataRegionImg, arjeq,buttons,rooms } from "../Data/DataBase";


const Filter = () => {
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleCheckboxChange = (region) => {
    setSelectedRegions((prevSelected) =>
      prevSelected.includes(region)
        ? prevSelected.filter((r) => r !== region)
        : [...prevSelected, region]
    );
  };

  return (
    <>
      <div className="post hidden sm:block">
        <div className="filter-container">
          <div className="filter-group max-h-[200px] overflow-y-auto p-2">
            <strong>Տարածաշրջան</strong>
            {dataRegion.map((el) => (
              <div key={el.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRegions.includes(el.text)}
                  onChange={() => handleCheckboxChange(el.text)}
                />
                <span className="text-gray-400">{el.text}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="filter-group">
            <strong>Արժեք</strong>
            <div className="flex gap-4 mt-2">
              {arjeq.map((currency) =>
                currency.type === "image" ? (
                  <img key={currency.id} src={currency.icon} alt={currency.alt} className="w-[40px]" />
                ) : (
                  <i
                    key={currency.id}
                    className={`${currency.icon} h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]`}
                    style={{ fontSize: "24px" }}
                  ></i>
                )
              )}
            </div>
            <div className="price-range mt-4 flex flex-wrap gap-2">
              <input type="number" placeholder="Սկսած" className="w-full sm:w-[120px]" />
              <span>-</span>
              <input type="number" placeholder="Մինչև" className="w-full sm:w-[120px]" />
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="bg-gray-300 rounded-full w-10 h-10">-</button>
              <input type="number" className="w-14 text-center" />
              <button className="bg-gray-300 rounded-full w-10 h-10">+</button>
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Գիշերակացի առկայություն</strong>
            <div className="flex flex-wrap gap-3">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className="rounded-[30px] h-[50px] bg-gray-300 text-black"
                  style={{ width: button.width, marginTop: button.id === 3 ? "10px" : "0" }}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
          <hr />


          <div className="filter-group">
            <strong>Սենյակների քանակ</strong>
            <div className="flex flex-wrap gap-3">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  className="rounded-[30px] h-[50px] bg-gray-300 text-black"
                  style={{ width: room.width, marginTop: room.id >= 7 ? "10px" : "0" }}
                >
                  {room.text}
                </button>
              ))}
            </div>
          </div>


        </div>
      </div>
      <div className="filtered-data mt-4">
        {/* <strong>Ընտրված Տարածաշրջաններ</strong> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataRegionImg
            .filter((img) => selectedRegions.includes(img.description))
            .map((img) => (
              <div key={img.id} className="border p-2 rounded-lg shadow-md">
                <img src={img.image} alt={img.description} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-lg font-bold mt-2">{img.title}</h3>
                <p className="text-gray-500">{img.description}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Filter;







