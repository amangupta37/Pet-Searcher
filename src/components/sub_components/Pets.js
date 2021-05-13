import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const Pets = () => {
  const [animals, setAnimals] = useState("");

  return (
    <div className="pets">
      <label htmlFor="chooseAnimal">
        Animals :
        <select
          id="chooseAnimal"
          value={animals}
          onChange={ChoosedAnimal}
          onBlur={ChoosedAnimal}
        >
          <option>--Select the option--</option>
          {ANIMALS.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
export default Pets;
