import React, { useState } from "react";

const Breeds = () => {
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState(["data1", "data2", "data3", "data4"]);

  const inputBreed = (e) => {
    const breedData = e.target.value;
    setBreed(breedData);
  };
  return (
    <div className="breed">
      <label htmlFor="breed">
        Breeds :
        <select
          id="breed"
          value={breed}
          onChange={inputBreed}
          onBlur={inputBreed}
          disabled={breeds.length === 0}
        >
          <option>--Select Breeds--</option>
          {breeds.map((breedsvalue) => {
            return (
              <option key={breedsvalue} value={breedsvalue}>
                {breedsvalue}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Breeds;
