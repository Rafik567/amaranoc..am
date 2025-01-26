import React, { useState } from "react";
import "../BodyAll/filter.css";
import { dataRegion, dataFeatures, arjeq,buttons,rooms } from "../Data/DataBase";

const Filter = () => {

  const [idBtn, setIdBtn] = useState(null);
  let clickFun = (idBtn) => {
    setIdBtn(idBtn);

  }

  return (
    <>
      <div className="post hidden sm:block">
        <div className="filter-container">
          <div className="filter-group max-h-[200px] overflow-y-auto p-2">
            <strong>Տարածաշրջան</strong>
            {dataRegion.map((el, id) => (
              <div className="flex flex-wrap gap-[10px]">
                <input type="checkbox" key={el.id} />
                <span className="text-gray-400">{el.text}</span>
              </div>
            )
            )}

          </div>
          <hr />

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
              <input type="number" placeholder="Սկսած" className="w-full sm:w-[120px]" />
              <span>-</span>
              <input type="number" placeholder="Մինչև" className="w-full sm:w-[120px]" />
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ</strong>
            <div className="flex flex-wrap gap-[10px] mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">-</button>
              <input
                type="number"
                className="w-[60px] text-center"
                placeholder="1"
              />
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">+</button>
            </div>
          </div>
          <hr />
          <div className="filter-group">
            <strong>Գիշերակացի առկայություն</strong>
            <div className="flex flex-wrap gap-[15px]">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => clickFun(button.id)}
                  className={`rounded-[30px] h-[50px] ${idBtn === button.id ? "bg-black text-white" : "bg-gray-300 text-black"
                    }`}
                  style={{ width: button.width, marginTop: button.id === 3 ? "10px" : "0" }}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ գիշերակացով</strong>
            <div className="flex flex-wrap gap-[10px] mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">-</button>
              <input
                type="number"
                className="w-[60px] text-center"
                placeholder="1"
              />
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">+</button>
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Սենյակների քանակ</strong>
            <div className="flex flex-wrap gap-[15px]">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => clickFun(room.id)}
                  className={`rounded-[30px] h-[50px] ${idBtn === room.id ? "bg-black text-white" : "bg-gray-300 text-black"}`}
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

          <div className="filter-group max-h-[200px] overflow-y-auto p-2">
            <strong>Առավելություններ</strong>
            {dataFeatures.map((el, id) => (
              <div className="flex flex-wrap gap-[10px]">
                <input type="checkbox" key={el.id} />
                <span className="text-gray-400">{el.text}</span>
              </div>
            )
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;