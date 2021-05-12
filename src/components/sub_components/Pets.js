import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const Pets = () => {
  const [animals, setAnimals] = useState("");
  const ChoosedAnimal = (e) => {
    const Animal = e.target.value;
    setAnimals(Animal);
  };
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
          {ANIMALS.map((value) => (
            <option>{value}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
export default Pets;
