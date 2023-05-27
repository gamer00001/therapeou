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
  borderRadius,
}) => {
  const getStyles = (type) => {
    switch (type.toLowerCase()) {
      case "decline":
        return "decline-btn";
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
        borderRadius: borderRadius ?? "",
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
