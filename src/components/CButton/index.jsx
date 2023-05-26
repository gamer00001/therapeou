import React from "react";
import "./index.css";
import { Button } from "@mui/material";

const CButton = ({
  type = "",
  title,
  onClick,
  width = "",
  height = "",
  icon,
  customStyles = {},
  padding = "",
  customClassName = "",
  customContainerStyles = {},
  disabled = false,
}) => {
  const getStyles = (type) => {
    switch (type.toLowerCase()) {
      case "hire":
        return "hire-btn";
      case "submit":
        return "submit-btn";
      case "offer":
        return "offer-btn";

      default:
        return "default-btn-styles";
    }
  };
  return (
    // <div className={`custom-button-container`} style={customContainerStyles}>
    <Button
      style={{
        width: width ?? "",
        height: height ?? "",
        ...customStyles,
      }}
      className={`${getStyles(type)} ${customClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
    // </div>
  );
};

export default CButton;
