import React from "react";
import { Box, Fade, Input, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import CButton from "../CButton";
// import ReactDatePicker from "react-datepicker";

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

const BookAppointment = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            className={styles.startNowText}
            variant="h6"
            component="h2"
          >
            Start Now
          </Typography>
          <Typography className={styles.fieldsContainer} component="div">
            <Input placeholder="Full Name" className={styles.inputFields} />

            <Input placeholder="Email Address" className={styles.inputFields} />

            {/* <ReactDatePicker
              //   selected={startDate}
              //   onChange={(date) => setStartDate(date)}
              showTimeSelect
              className={styles.inputFields}
              //   filterTime={filterPassedTime}
              dateFormat="MMMM d, yyyy h:mm aa"
            /> */}

            <Input placeholder="Date" className={styles.inputFields} />

            <Input
              placeholder="What Services do you need?"
              className={styles.inputFields}
            />
          </Typography>

          <Typography className={styles.bookNowBtn} component="div">
            <CButton
              title="Book now"
              width="160px"
              borderRadius="30px"
              type="book"
            />
          </Typography>
        </Box>
      </Fade>
    </div>
  );
};

export default BookAppointment;
