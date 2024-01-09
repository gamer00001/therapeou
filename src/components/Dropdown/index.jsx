import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Dropdown = ({ label, value, handleChange, options }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((item) => (
            <MenuItem value={item.value}>{item?.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
