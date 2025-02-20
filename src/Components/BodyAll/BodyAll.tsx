import React, { useState, useEffect } from "react";
import "../BodyAll/filter.css";

import Map from "./Map";
import Home from "./Home";
import BestOffers from "./BestOffers";
import Regular from "./Regular";
import Filter from "./Filter";
import TopHeader from "../Header/TopHeader";

const BodyAll: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filteredRegion, setFilteredRegion] = useState<string | null>(null);

  // Երբ region-ը փոխվում է, այն փոխանցում ենք միայն որոշ ժամանակ անց
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilteredRegion(selectedRegion);
    }, 300); // 300 միլիվայրկյան սպասում՝ կանխելու համար կրկնվող ռենդեռները

    return () => clearTimeout(timeout);
  }, [selectedRegion]);

  return (
    <>
      <TopHeader />
      <div className="flex justify-evenly mt-[60px]">
        <Filter setRegion={setSelectedRegion} />
        <div>
          <Map />
          <div>
            <Home />
          </div>
          <BestOffers selectedRegion={filteredRegion} />
          <Regular />
        </div>
      </div>
    </>
  );
};

export default BodyAll;
