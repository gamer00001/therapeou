import React from "react";
import "./index.css";
import { Button } from "@mui/material";

const CButton = ({
  type = "",
  title,
  onClick,
  formType,
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
      case "appointment":
        return "appointment-btn";

      case "book":
        return "book-btn";

      case "chat":
        return "chat-btn";

      default:
        return "default-btn-styles";
    }
  };
  return (
    // <div className={`custom-button-container`} style={customContainerStyles}>
    <Button
      type={formType}
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
