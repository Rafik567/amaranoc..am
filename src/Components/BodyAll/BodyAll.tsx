import React, { useState } from "react";
import "../BodyAll/filter.css"

import Map from "./Map";
import Home from "./Home";
import BestOffers from "./BestOffers";
import Regular from "./Regular";
import Filter from "./Filter";

// Տիպավորում selectedRegion-ի համար
interface BodyAllProps {
  selectedRegion: string | null;
}

const BodyAll: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

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
