import React from "react";
import "../BodyAll/filter.css";
import { data, data2, data6, data7, data8, dataBase } from "../Data/DataBase";
import Map from "./Map";
import Home from "./Home";
import BestOffers from "./BestOffers";
import Regular from "./Regular";
import Filter from "../BodyAll/Filter";


const BodyAll = () => {
  return (
    <>
      <div className="flex justify-evenly mt-[60px]">
<Filter/>
        <div>
          <Map />
          <div>
            <Home />
          </div>
          <BestOffers />
          <Regular />
        </div>
      </div>
    </>
  );
};

export default BodyAll;
