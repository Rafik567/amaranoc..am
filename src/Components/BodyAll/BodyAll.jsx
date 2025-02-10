import React, { useState } from "react";
import "../BodyAll/filter.css"

import Map from "./Map";
import Home from "./Home";
import BestOffers from "./BestOffers";
import Regular from "./Regular";
import Filter from "../BodyAll/Filter";

const BodyAll = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  return (
    <>
      <div className="flex justify-evenly mt-[60px]">
      <Filter setRegion={setSelectedRegion} />
        <div>
          <Map />
          <div>
            <Home />
          </div>
          
      <BestOffers selectedRegion={selectedRegion} />
          <Regular />
        </div>
      </div>
    </>
  );
};

export default BodyAll;
