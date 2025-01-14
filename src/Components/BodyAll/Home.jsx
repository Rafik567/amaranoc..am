import React from "react";
import { data, data2, data6, data7, data8, dataBase } from "../Data/DataBase";
import "../BodyAll/filter.css";
const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
        {data.map((el) => (
          <div key={el.id}>
            <img src={el.url} className="image rounded-[10px] w-[40px] " />
            <p className="card-description text-[black]">{el.text}</p>
          </div>
        ))}
        <i
          className="fa fa-arrow-right h-[39px] rounded-[20px] border-2 border-gray-300 p-[6px]"
          style={{ fontSize: "24px" }}
        ></i>
      </div>
    </>
  );
};

export default Home;
