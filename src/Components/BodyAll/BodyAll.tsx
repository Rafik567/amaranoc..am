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
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  useEffect(() => {
    if (searchQuery) {
      setSelectedRegion(searchQuery);
    }
  }, [searchQuery]);

  return (
    <>
      <TopHeader onSearch={setSearchQuery} />
      <div className="flex justify-evenly mt-[60px]">
        <Filter setRegion={setSelectedRegion} />
        <div>
          <Map />
          <div>
            <Home />
          </div>
          <BestOffers selectedRegion={selectedRegion} />
          <Regular selectedRegion={selectedRegion} />
        </div>
      </div>
    </>
  );
};

export default BodyAll;
