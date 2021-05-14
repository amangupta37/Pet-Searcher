import React, { useState } from "react";
import useDropdown from "./custom_hooks/useDropdown";

const Breeds = () => {
  const [breeds, setBreeds] = useState(["data1", "data2", "data3", "data4"]);
  const [breed, BreedDropdown] = useDropdown("Breeds", "All", breeds);

  return (
    <div className="breed">
      <BreedDropdown />
    </div>
  );
};

export default Breeds;
