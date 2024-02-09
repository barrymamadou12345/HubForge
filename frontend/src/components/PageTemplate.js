import React from "react";
import EnsembleTemp2 from "./TemplateNum2/EnsembleTemp2";
import ChompRestaurant from "../components/pageTemplate2/ChompRestaurant";

import SEVI from "./NewTemp1/SEVI";
import Ensemble from "./composPageAccueil/NewTemp2/Ensemble";
export const PageTemplate1 = () => {
  return (
    <div>
      <ChompRestaurant />
    </div>
  );
};

export const PageTemplate2 = () => {
  return (
    <div>
      <Ensemble/>
    </div>
  );
};
export const PageTemplate3 = () => {
  return (
    <div>
      <SEVI />
    </div>
  );
};

export const PageTemplate4 = () => {
  return (
    <div>
      <p className="text-center mt-[20%] text-4xl text-red-700 font-bold"></p>
    </div>
  );
};
