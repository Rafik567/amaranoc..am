
import React, { useState } from "react";
import "../BodyAll/filter.css";
import { dataRegion, arjeq, buttons, rooms } from "../Data/DataBase"; 

const Filter = ({ setRegion }) => {
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleCheckboxChange = (region) => {
    setSelectedRegions([region]);
    setRegion(region);
  };

  return (
    <div className="post hidden sm:block">
      <div className="filter-container">
        <div className="filter-group max-h-[200px] overflow-y-auto p-2">
          <strong>Տարածաշրջան</strong>
          {dataRegion.map((el) => (
            <div key={el.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="region"
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



  );
};

export default Filter;

