import React, { useState } from "react";

const useDropdown = (lable, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const id = 'use-dropdown-${lable.replace(" " , "").toLowerCase()}';

  const Dropdown = () => {
    const event = (e) => {
      const data = e.target.value;
      setState(data);
    };

    return (
      <label htmlFor={id}>
        {lable} :
        <select
          id={id}
          value={state}
          onChange={event}
          onBlur={event}
          disabled={!state.length}
        >
          <option>--All--</option>
          {options.map((items) => {
            return (
              <option key={items} value={items}>
                {items}
              </option>
            );
          })}
        </select>
      </label>
    );
  };

  return [state, Dropdown, setState];
};

export default useDropdown;
