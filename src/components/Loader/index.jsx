import React from "react";
// import { Backdrop, CircularProgress } from "@mui/material";
import "./index.scss";

const Loader = ({ isShow = false }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
