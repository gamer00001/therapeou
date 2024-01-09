import React from "react";
import { Box, Fade, TextField } from "@mui/material";

import styles from "./styles.module.scss";
import "./modal.scss";
import CButton from "../CButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddAppointmentNote = ({
  isOpen = false,
  handleNote,
  handleAddNoteAction,
}) => {
  return (
    <div className={`${styles.notesContainer} notesBlock`}>
      <Fade in={isOpen}>
        <Box sx={style}>
          <div className={styles.headerRow}>Add Note</div>
          <div className="p-20">
            <TextField
              fullWidth
              multiline
              onChange={handleNote}
              placeholder="Add Note About Appointment"
              type="text"
              size="medium"
              rows={4}
            />
          </div>

          <div className="p-20 float-right">
            <CButton title="Add" type="submit" onClick={handleAddNoteAction} />
          </div>
        </Box>
      </Fade>
    </div>
  );
};

export default AddAppointmentNote;
