import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./custom_hooks/useDropdown";

const Pets = () => {
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  return (
    <div>
      <AnimalDropdown />
    </div>
  );
};
export default Pets;
