import React from "react";
import Location from './sub_components/Location';
import Pets from './sub_components/Pets'
const Pet = () => {
  return (
    <div className="pet">
      <div className="search-details">
      <div className="search">
      <h2>Fill the details</h2>
      </div>
      <div className="finder-box">
        <Location />
        <Pets />
        <h3>fill3</h3>
        <h3>fill4</h3>
      </div>
      </div>
    </div>
  );
};

export default Pet;
