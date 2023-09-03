import React, { useState, useRef, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";

import "./styles.scss";
import CButton from "../CButton";

const SearchField = (props) => {
  const ref = useRef();

  const [state, setState] = useState({
    open: false,
    searchType: "name",
  });
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceSearch = debounce(props.onChange, 500);

  const handleFilters = () => {
    setState((prev) => ({
      ...prev,
      open: !prev.open,
    }));
  };

  const handleRadioAction = (e) => {
    const searchType = e.target.value;
    setState((prev) => ({ ...prev, searchType }));
  };

  const handleSave = () => {
    handleFilters();

    props.setSearchType(state.searchType);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (state.open && ref.current && !ref.current.contains(e.target)) {
        handleFilters();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [state.open]);

  return (
    <div>
      <Input
        {...props}
        endAdornment={
          <img
            alt="icon"
            src="/fiters-icon.svg"
            onClick={handleFilters}
            className="pr-20 cursor-pointer"
          />
        }
        className="searchTherapistField"
        onChange={debounceSearch}
      />

      {state.open && (
        <>
          <div className="filtersBlock" ref={ref}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Search by
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="name"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="name"
                  control={<Radio />}
                  label="Name"
                  onChange={handleRadioAction}
                />
                <FormControlLabel
                  value="radius"
                  control={<Radio />}
                  label="Radius"
                  onChange={handleRadioAction}
                />
                <FormControlLabel
                  value="specialization"
                  control={<Radio />}
                  label="Specialization"
                  onChange={handleRadioAction}
                />
              </RadioGroup>
              <div className="text-center">
                <CButton title="Save" type="submit" onClick={handleSave} />
              </div>
            </FormControl>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchField;
