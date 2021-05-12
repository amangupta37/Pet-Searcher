import React, { useState } from "react";

const Location = () => {
  const [location, setLocation] = useState("");

  const inputLocation = (e) => {
    const enteredlocation = e.target.value;
    setLocation(enteredlocation);
  };
  return (
    <div className="location">
      <label htmlFor="userlocation">
        Location :
        <input
          type="text"
          value={location}
          id="userlocation"
          placeholder="enter location"
          onChange={inputLocation}
        />
      </label>
    </div>
  );
};

export default Location;
