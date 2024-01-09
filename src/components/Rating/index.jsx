import * as React from "react";
import Rating from "@mui/material/Rating";

export default function RatingStar({ rating, setRating }) {
  return (
    <Rating
      name="simple-controlled"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
    />
  );
}
