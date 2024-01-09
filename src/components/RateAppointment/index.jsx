import React, { useState } from "react";
import { Box, Fade, Input, Typography } from "@mui/material";

import styles from "./styles.module.scss";
import RatingStar from "../Rating";
import CButton from "../CButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RateAppointment = ({ isOpen, handleAppointmentRating }) => {
  const [state, setState] = useState({
    rating: 3,
    review: "",
  });
  return (
    <div className="ratingBox">
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            className={styles.rateText}
            variant="h6"
            component="h2"
          >
            Rate Therapist
          </Typography>
          <Typography className={styles.fieldsContainer} component="div">
            <div className="py-20">
              <RatingStar
                rating={state.rating}
                setRating={(rating) =>
                  setState((prev) => ({
                    ...prev,
                    rating,
                  }))
                }
              />
            </div>

            <div className="py-8">
              <Input
                placeholder="Review"
                className={styles.reviewField}
                value={state.review}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    review: e.target.value,
                  }))
                }
                multiline
                rows={3}
              />
            </div>
            <div className="text-center pt-20">
              <CButton
                title="Submit"
                type="book"
                onClick={() => handleAppointmentRating(state)}
              />
            </div>
          </Typography>
        </Box>
      </Fade>
    </div>
  );
};

export default RateAppointment;
