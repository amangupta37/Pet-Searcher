import React from "react";
import Location from "./sub_components/Location";
import Pets from "./sub_components/Pets";
import Breeds from "./sub_components/Breeds";
const Pet = () => {
  return (
    <div className="pet">
      <div className="search-details">
        <div className="search">
          <h2>Fill the details</h2>
        </div>
        <div className="finder-box">
          <form>
            <Location />
            <Pets />
            <Breeds />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pet;
