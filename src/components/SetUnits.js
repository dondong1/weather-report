import React, { useState } from "react";

const SetUnits = ({ onSet }) => {
  const [units, setUnits] = useState();
  const onSetUnits = (val) => {
    setUnits(val);
    onSet(val);
  };
  return (
    <div className="set-units">
      <label htmlFor="units">UNITS</label>
      <select
        name="units"
        id="units"
        units={units}
        onChange={(e) => onSetUnits(e.target.value)}
      >
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
    </div>
  );
};

export default SetUnits;